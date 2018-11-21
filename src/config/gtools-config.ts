import { GToolsConfigInterface } from "./gtools-config.interface";

let config: GToolsConfigInterface;

/**
 * @class
 * @implements {GToolsConfigInterface}
 * @example
 * class ClassOwnConfig extends ClassGToolsConfig implements OwnConfigInterface {
 *     public name = "";
 * }
 *
 * export const OwnConfig = new ClassOwnConfig();
 *
 * @see GToolsConfigInterface
 */
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
            return {
                URL_API   : "",
                LANGUAGE  : "",
                VERSION   : "",
                PAGE_LIMIT: 0,
            };
        }

        return config;
    }
}

export function initConfig(appConfig: GToolsConfigInterface): void {
    config = appConfig;
}

export const GToolsConfig = new ClassGToolsConfig();
