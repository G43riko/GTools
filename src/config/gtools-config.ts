import { GToolsConfigInterface } from "./gtools-config.interface";

let config: GToolsConfigInterface;

export class ClassGToolsConfig implements GToolsConfigInterface {
    public get URL_API(): string {
        return this.checkConfig().URL_API;
    }

    public get PAGE_LIMIT(): number {
        return this.checkConfig().PAGE_LIMIT;
    }

    public get LANGUAGE(): string {
        return this.checkConfig().LANGUAGE;
    }

    public get VERSION(): string {
        return this.checkConfig().VERSION;
    }

    private checkConfig(): GToolsConfigInterface {
        if (!config) {
            throw new Error("App config must be initializes(app-config/initConfig({...params}))");
        }

        return config;
    }
}

export function initConfig(appConfig: GToolsConfigInterface): void {
    config = appConfig;
}

export const GToolsConfig = new ClassGToolsConfig();
