import type {configuration_} from "./configuration/module.ts";
import type {forwardPath_} from "./forward-path/module.ts";
import type {reversePath_} from "./reverse-path/module.ts";
import type {rfc5322} from "@native-typescript/rfc-5322";
import {createTransport, type Transporter} from "nodemailer";
import type {
	Options,
	SentMessageInfo,
} from "nodemailer/lib/smtp-transport/index.js";
export class Facade {
	public constructor(configuration: configuration_.Configuration) {
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
		mailFrom: reversePath_.ReversePath,
		rcptTo: readonly [
			forwardPath_.ForwardPath,
			...(readonly forwardPath_.ForwardPath[]),
		],
		data: rfc5322.Message,
	): Promise<void> {
		await this.transporter.sendMail({
			envelope: {
				from: mailFrom === `<>` ? mailFrom : mailFrom.mailbox.stringify(),
				to: rcptTo.map(function stringifyMailbox(
					forwardPath: forwardPath_.ForwardPath,
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
