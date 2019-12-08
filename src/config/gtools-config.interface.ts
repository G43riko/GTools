/**
 * @example
 * export interface OwnConfigInterface extends GToolsConfigInterface {
 *     name: string;
 * }
 * @see ClassGToolsConfig
 */
export interface GToolsConfigInterface {
    URL_API: string;
    LANGUAGE: string;
    VERSION: string;
    PAGE_LIMIT: number;
}
