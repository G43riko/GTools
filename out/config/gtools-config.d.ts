import { GToolsConfigInterface } from "./gtools-config.interface";

export declare class ClassGToolsConfig implements GToolsConfigInterface {
    get URL_API(): string;
    get PAGE_LIMIT(): number;
    get LANGUAGE(): string;
    get VERSION(): string;
}
export declare function initConfig(appConfig: GToolsConfigInterface): void;
export declare const GToolsConfig: ClassGToolsConfig;
