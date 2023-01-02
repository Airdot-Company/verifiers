import {
    GuildMember,
    ChatInputCommandInteraction,
    InteractionType,
    ChannelType,
    User as DiscordUser,
    ButtonInteraction as DiscordButtonInteraction,
    TextChannel as GuildTextChannel,
    Channel
} from "discord.js";
import { String } from "./node";

export function Member(member: any, canBeNull: boolean = false): member is GuildMember {
    if (canBeNull && member == null) return true;
    else if (!canBeNull && member == null) return false;

    return member instanceof GuildMember;
}

export function User(user: any): user is DiscordUser {
    return user instanceof User;
}

export function CommandInteraction(interaction: any, canBeNull: boolean = false): interaction is ChatInputCommandInteraction {
    if (canBeNull && interaction == null) return true;
    else if (!canBeNull && interaction == null) return false;
    if (interaction?.type == null) return false;
    return interaction.type == InteractionType.ApplicationCommand;
}

export function ButtonInteraction(interaction: any, canBeNull: boolean = false): interaction is DiscordButtonInteraction {
    if (canBeNull && interaction == null) return true;
    else if (!canBeNull && interaction == null) return false;
    if (interaction?.type == null) return false;
    return interaction.type == InteractionType.MessageComponent;
}

export function TextChannel(channel: any | Channel, canBeNull: boolean = false): channel is GuildTextChannel {
    if (canBeNull && channel == null) return true;
    else if (!canBeNull && channel == null) return false;
    if (channel?.type == null) return false;
    return channel.type == ChannelType.GuildText;
}

export function Emoji(emoji: string, animated: boolean = false) {
    if (!String(emoji)) return false;
    return (
        emoji.startsWith("<:") || (animated == true ? emoji.startsWith("<a:") : false)
    ) && emoji.endsWith(">") && emoji.length >= 20;
}

export function Snowflake(snowflake: string | number) {
    return String(snowflake, {
        max: 19,
        min: 18
    });
}
