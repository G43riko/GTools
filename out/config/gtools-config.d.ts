import { GToolsConfigInterface } from "./gtools-config.interface";
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
export declare class ClassGToolsConfig implements GToolsConfigInterface {
    get URL_API(): string;
    get PAGE_LIMIT(): number;
    get LANGUAGE(): string;
    get VERSION(): string;
}
export declare function initConfig(appConfig: GToolsConfigInterface): void;
export declare const GToolsConfig: ClassGToolsConfig;
