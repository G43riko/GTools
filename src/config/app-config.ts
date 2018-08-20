import { AppConfigInterface } from "./app-config.interface";

let config: AppConfigInterface;

class ClassAppConfig implements AppConfigInterface {
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

    private checkConfig(): AppConfigInterface {
        if (!config) {
            throw new Error("App config must be initializes(app-config/initConfig({...params}))");
        }

        return config;
    }
}

export function initConfig(appConfig: AppConfigInterface): void {
    config = appConfig;
}

export const AppConfig = new ClassAppConfig();
