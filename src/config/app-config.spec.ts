import { expect } from "chai";
import { AppConfig } from "./app-config";

describe("AppConfig", () => {
    describe("setAppConfig", () => {
        it("Return config values from options", () => {
            expect(() => AppConfig.URL_API).to.throw(Error);
            expect(() => AppConfig.PAGE_LIMIT).to.throw(Error);

            AppConfig.initConfig({
                PAGE_LIMIT: 233,
                URL_API: "https://aahaaa.com",
                VERSION: "1.0.0",
                LANGUAGE: "SK",
            });

            expect(AppConfig.URL_API).to.be.equal("https://aahaaa.com");
            expect(AppConfig.PAGE_LIMIT).to.be.equal(233);


            AppConfig.initConfig({
                PAGE_LIMIT: 332,
                URL_API: "https://huraaaaaa.com",
                VERSION: "1.0.0",
                LANGUAGE: "SK",
            });
            expect(AppConfig.URL_API).to.be.equal("https://huraaaaaa.com");
            expect(AppConfig.PAGE_LIMIT).to.be.equal(332);

            AppConfig.initConfig(null as any);

            expect(() => AppConfig.URL_API).to.throw(Error);
            expect(() => AppConfig.PAGE_LIMIT).to.throw(Error);

        });
    });
});