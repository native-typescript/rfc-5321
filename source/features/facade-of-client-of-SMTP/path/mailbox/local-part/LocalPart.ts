import type {dotString_} from "./dot-string/module.ts";
import type {quotedString_} from "./quoted-string/module.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
/* eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents */
export type LocalPart = dotString_.DotString | quotedString_.QuotedString;
