import type {Mailbox} from "./mailbox/index.ts";
/**
 * https://datatracker.ietf.org/doc/html/rfc5321#section-4.1.2
 */
export class Path {
	public constructor(mailbox: Mailbox) {
		this.mailbox = mailbox;
	}
	public readonly mailbox: Mailbox;
	public stringify(): `<${string}>` {
		const stringifiedMailboxOfThis: string = this.mailbox.stringify();
		const stringifiedThis = `<${stringifiedMailboxOfThis}>` as const;
		return stringifiedThis;
	}
}
