import { GToolsConfigInterface } from "./gtools-config.interface";

let config: GToolsConfigInterface;

const checkConfig = (): GToolsConfigInterface => {
    if (!config) {
        return {
            URL_API   : "",
            LANGUAGE  : "",
            VERSION   : "",
            PAGE_LIMIT: 0,
        };
    }

    return config;
};

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
        return checkConfig().URL_API;
    }

    public get PAGE_LIMIT(): number {
        return checkConfig().PAGE_LIMIT;
    }

    public get LANGUAGE(): string {
        return checkConfig().LANGUAGE;
    }

    public get VERSION(): string {
        return checkConfig().VERSION;
    }

}

export function initConfig(appConfig: GToolsConfigInterface): void {
    config = appConfig;
}

export const GToolsConfig = new ClassGToolsConfig();
