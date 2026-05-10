import type {PortOfConfigurationOfSmtpClientFacade} from "./port/index.ts";
import type {UserOfConfigurationOfSmtpClientFacade} from "./user/index.ts";
export type ConfigurationOfSmtpClientFacade = {
	readonly hostname: string;
	readonly port: PortOfConfigurationOfSmtpClientFacade;
	readonly user: UserOfConfigurationOfSmtpClientFacade;
};
