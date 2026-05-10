import type {LocalPart} from "./local-part/index.ts";
import type {ParenthesesOfMailbox} from "./parentheses/index.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
export class Mailbox {
	public constructor(localPart: LocalPart, parentheses: ParenthesesOfMailbox) {
		this.localPart = localPart;
		this.parentheses = parentheses;
	}
	public readonly localPart: LocalPart;
	public readonly parentheses: ParenthesesOfMailbox;
	public stringify(): `${LocalPart}@${ParenthesesOfMailbox}` {
		return `${this.localPart}@${this.parentheses}` as const;
	}
}
