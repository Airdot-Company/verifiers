import { NumberOptions, HexColorString } from "./types";

/**
 * Verifies if the given string is a hex color string.
 */
export function HexColor(str: any | string): str is HexColorString {
    if (!String(str)) return false;
    return str.startsWith("#");
}

/**
 * Verifies if the given string is a string.
 */
export function String(str: any | string, options: NumberOptions = {}): str is string {
    if (str == '') return false;
    if (typeof str != 'string') return false;
    if (options.max != null && str.length >= options.max) return false;
    if (options.min != null && str.length <= options.min) return false;
    return true;
}

/**
 * Verifies if the given string is a number by using the `Number()` function.
 */
export function StringNumber(str: any | number, options: NumberOptions = {}): str is number {
    str = Number(str);
    if (isNaN(str)) return false;
    if (options.max != null && str >= options.max) return false;
    if (options.min != null && str <= options.min) return false;
    return true;
}