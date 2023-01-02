export {
    HexColorString,
    NumberOptions
} from "./verifiers/types";
import {
    ButtonInteraction,
    CommandInteraction,
    Emoji,
    Member,
    Snowflake,
    TextChannel,
    User
} from "./verifiers/discord";
import {
    Link,
    Redirection,
    InviteLink
} from "./verifiers/web";
import {
    HexColor,
    String,
    StringNumber
} from "./verifiers/node"

export const Verifiers = {
    HexColor,
    String,
    StringNumber,
    /**
     * Collection of verifiers for URLs.
     */
    Web: {
        Link,
        Redirection,
        InviteLink
    },
    /**
     * Collection of verifiers for Discord.js
     */
    Discord: {
        ButtonInteraction,
        CommandInteraction,
        Emoji,
        Member,
        Snowflake,
        TextChannel,
        User
    }
};