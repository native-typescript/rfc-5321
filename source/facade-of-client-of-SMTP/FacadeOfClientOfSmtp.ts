import type {ConfigurationOfFacadeOfClientOfSmtp} from "./configuration/index.ts";
import type {ForwardPath} from "./forward-path/index.ts";
import type {ReversePath} from "./reverse-path/index.ts";
import type {rfc5322} from "@native-typescript/rfc-5322";
import {createTransport, type Transporter} from "nodemailer";
import type {
	Options,
	SentMessageInfo,
} from "nodemailer/lib/smtp-transport/index.js";
export class FacadeOfClientOfSmtp {
	public constructor(configuration: ConfigurationOfFacadeOfClientOfSmtp) {
		this.transporter = createTransport({
			auth: {pass: configuration.user.password, user: configuration.user.name},
			host: configuration.hostname,
			port: configuration.port.number,
			secure: configuration.port.isWithTls,
		});
	}
	/**
	 * https://datatracker.ietf.org/doc/html/rfc5321#section-3.3
	 */
	public async executeTransaction(
		mailFrom: ReversePath,
		rcptTo: readonly [ForwardPath, ...(readonly ForwardPath[])],
		data: rfc5322.Message,
	): Promise<void> {
		await this.transporter.sendMail({
			envelope: {
				from: mailFrom === `<>` ? mailFrom : mailFrom.mailbox.stringify(),
				to: rcptTo.map(function stringifyMailbox(
					forwardPath: ForwardPath,
				): `${string}@${string}` {
					const stringifiedMailbox: `${string}@${string}` =
						forwardPath.mailbox.stringify();
					return stringifiedMailbox;
				}),
			},
			raw: data.serialize(),
		});
	}
	private readonly transporter: Transporter<SentMessageInfo, Options>;
}
