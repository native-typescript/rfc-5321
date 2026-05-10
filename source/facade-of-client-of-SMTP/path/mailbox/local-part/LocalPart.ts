import type {DotString} from "./dot-string/index.ts";
import type {QuotedString} from "./quoted-string/index.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
/* eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents */
export type LocalPart = DotString | QuotedString;
