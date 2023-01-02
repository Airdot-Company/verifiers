import fetch, { AxiosResponse } from "axios";

const LinkRegEx = {
    Strict: (/^(http|https):\/\/[^ "]+$/gi),
    Lazy: (/^(http|https):\/\/?([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)(\/([^?\/]+))?/gi)
};

export function Link(str: string, strict: boolean = true) {
    const RegEx = (strict ? LinkRegEx.Strict : LinkRegEx.Lazy);
    return RegEx.test(str);
}

export async function Redirection(str: string, redirect: string, type: "startsWith" | "includes" | "endsWith" = "startsWith") {
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discord.com\/invite|watchanimeattheoffice.com\/invite|dis.gd\/invite|bigbean.solutions\/invite)\/+[a-zA-Z0-9]{4,16}/gi;
    if (!Link(str, false)) return {
        location: null,
        result: false
    }//throw new Error("[@airdot/verifiers] Invalid URL provided");
    if (!str.startsWith("http://") && !str.startsWith("https://")) str = `http://${str}`;
    const web = await fetch(str)
        .catch(e => console.error(`[@airdot/verifiers] Error requesting ${str}: ${e}`)) as any as AxiosResponse;
    const location = web?.request?.res?.responseUrl as string;
    if (location == null) throw new Error(`[@airdot/verifiers] Error requesting ${str}: redirect location null`);
    const result = await (async () => {
        if (type == "startsWith") return location.startsWith(redirect);
        else if (type == "includes") return location.includes(redirect);
        else if (type == "endsWith") return location.endsWith(redirect);
        else throw new Error("[@airdot/verifiers] Invalid type");
    })();

    return {
        location,
        result
    }
}

export function InviteLink(str: string) {
    return Redirection(str, "https://discord.com/invite", "startsWith");
}