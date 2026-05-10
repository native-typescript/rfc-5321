import type {PortOfConfigurationOfFacadeOfClientOfSmtp} from "./port/index.ts";
import type {UserOfConfigurationOfFacadeOfClientOfSmtp} from "./user/index.ts";
export type ConfigurationOfFacadeOfClientOfSmtp = {
	readonly hostname: string;
	readonly port: PortOfConfigurationOfFacadeOfClientOfSmtp;
	readonly user: UserOfConfigurationOfFacadeOfClientOfSmtp;
};
