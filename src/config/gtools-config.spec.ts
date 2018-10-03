import { expect } from "chai";
import { GToolsConfig, initConfig } from "./gtools-config";

describe("GToolsConfig", () => {
    describe("setAppConfig", () => {
        it("Return config values from options", () => {
            expect(GToolsConfig.URL_API).to.be.equal("");
            expect(GToolsConfig.PAGE_LIMIT).to.be.equal(0);

            initConfig({
                PAGE_LIMIT: 233,
                URL_API: "https://aahaaa.com",
                VERSION: "1.0.0",
                LANGUAGE: "SK",
            });

            expect(GToolsConfig.URL_API).to.be.equal("https://aahaaa.com");
            expect(GToolsConfig.PAGE_LIMIT).to.be.equal(233);

            initConfig({
                PAGE_LIMIT: 332,
                URL_API: "https://huraaaaaa.com",
                VERSION: "1.0.0",
                LANGUAGE: "SK",
            });
            expect(GToolsConfig.URL_API).to.be.equal("https://huraaaaaa.com");
            expect(GToolsConfig.PAGE_LIMIT).to.be.equal(332);

            initConfig(null as any);

            expect(GToolsConfig.URL_API).to.be.equal("");
            expect(GToolsConfig.PAGE_LIMIT).to.be.equal(0);
        });
    });
});
