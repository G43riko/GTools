import { GToolsConfigInterface } from "./gtools-config.interface";

/**
 * @example
 * class ClassOwnConfig extends ClassGToolsConfig implements OwnConfigInterface {
 *     public name = "";
 * }
 *
 * export const OwnConfig = new ClassOwnConfig();
 *
 * @see GToolsConfigInterface
 */
export declare class ClassGToolsConfig implements GToolsConfigInterface {
    readonly URL_API: string;
    readonly PAGE_LIMIT: number;
    readonly LANGUAGE: string;
    readonly VERSION: string;
}
export declare function initConfig(appConfig: GToolsConfigInterface): void;
export declare const GToolsConfig: ClassGToolsConfig;
