import type {Domain} from "../../domain/index.ts";
import type {AddressLiteral} from "./address-literal/index.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
/* eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents */
export type ParenthesesOfMailbox = AddressLiteral | Domain;
