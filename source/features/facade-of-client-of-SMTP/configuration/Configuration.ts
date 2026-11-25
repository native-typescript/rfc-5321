import type {port_} from "./port/module.ts";
import type {user_} from "./user/module.ts";
export type Configuration = {
	readonly hostname: string;
	readonly port: port_.Port;
	readonly user: user_.User;
};
