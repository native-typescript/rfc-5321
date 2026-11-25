import type {domain_} from "../../domain/module.ts";
import type {addressLiteral_} from "./address-literal/module.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
export type Parentheses =
	addressLiteral_.AddressLiteral | domain_.Domain;
/* eslint-enable @typescript-eslint/no-redundant-type-constituents */
