import type {ParenthesesOfAddressLiteral} from "./parentheses/index.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
export type AddressLiteral = `[${ParenthesesOfAddressLiteral}]`;
