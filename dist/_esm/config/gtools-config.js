let config;
const checkConfig = () => {
    if (!config) {
        return {
            URL_API: "",
            LANGUAGE: "",
            VERSION: "",
            PAGE_LIMIT: 0,
        };
    }
    return config;
};
export class ClassGToolsConfig {
    get URL_API() {
        return checkConfig().URL_API;
    }
    get PAGE_LIMIT() {
        return checkConfig().PAGE_LIMIT;
    }
    get LANGUAGE() {
        return checkConfig().LANGUAGE;
    }
    get VERSION() {
        return checkConfig().VERSION;
    }
}
export function initConfig(appConfig) {
    config = appConfig;
}
export const GToolsConfig = new ClassGToolsConfig();
//# sourceMappingURL=gtools-config.js.map