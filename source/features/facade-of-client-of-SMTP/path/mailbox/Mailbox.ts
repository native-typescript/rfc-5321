import type {localPart_} from "./local-part/module.ts";
import type {parentheses_} from "./parentheses/module.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
export class Mailbox {
	public constructor(
		localPart: localPart_.LocalPart,
		parentheses: parentheses_.Parentheses,
	) {
		this.localPart = localPart;
		this.parentheses = parentheses;
	}
	public readonly localPart: localPart_.LocalPart;
	public readonly parentheses: parentheses_.Parentheses;
	public stringify(): `${localPart_.LocalPart}@${parentheses_.Parentheses}` {
		return `${this.localPart}@${this.parentheses}` as const;
	}
}
