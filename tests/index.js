const { Verifiers } = require("../dist/index");
require("colors");

(() => {
    console.log(`Running Hex Color Tests:`.blue + `
• aaa is hex color string: ${Verifiers.HexColor("aaa")}
• #5865f2 is hex color string: ${Verifiers.HexColor("#5865f2")}`.gray);
})();

(() => {
    console.log(`Running Link Tests:`.blue + `
• aaa is link: ${Verifiers.Web.Link("aaa")}
• https://discord.gg/ is link: ${Verifiers.Web.Link("https://discord.gg/")}
• (unstrict) discord.gg is link: ${Verifiers.Web.Link("discord.gg", false)}
• (strict) discord.gg is link: ${Verifiers.Web.Link("discord.gg")}`.gray);
})();

(async () => {
    /**
     * @readonly
     */
    const Link = "https://github.com/blog";
    /**
     * @readonly
     */
    const Expected = "https://github.blog";
    const startsWith = await Verifiers.Web.Redirection(Link, Expected, "startsWith");
    const includes = await Verifiers.Web.Redirection(Link, Expected, "includes");
    const endsWith = await Verifiers.Web.Redirection(Link, Expected, "endsWith");
    console.log(`Running Redirection Tests:`.blue + `
    ${await (await Verifiers.Web.Redirection(Link, Expected, "startsWith")).location}
• github.com/blog leads to github.blog (starts with): ${startsWith.result}
• github.com/blog leads to github.blog (includes): ${includes.result}
• github.com/blog leads to github.blog (ends with): ${endsWith.result}`.gray);
})();