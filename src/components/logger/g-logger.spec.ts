import { expect } from "chai";
import "mocha";
import { GLogger} from "./g-logger";
import { GLoggerCallbackHolder } from "./g-logger-callback-holder";
import { GLoggerDefaultFormatter } from "./g-logger-default-formatter";
import { GLoggerPriority } from "./g-logger-priority";

class TmpClass {

}

describe("GLoggerDefaultFormatter", () => {
    it("It should test formatting", () => {
        const formatter = new GLoggerDefaultFormatter();
        expect(formatter.format(GLoggerPriority.LOG, ["item"])).to.be.equal("[LOG] item");
        expect(formatter.format(GLoggerPriority.ERROR, ["random", "item"])).to.be.equal("[ERROR] random item");
        expect(formatter.format(GLoggerPriority.WARN, ["item"], "someContext")).to.be.equal("[WARN] someContext: item");
    });
});

describe("GLogger", () => {
    it.skip("It should test getLine method", () => {
        expect(GLogger.getLine()).to.be.equal("at (D:\\Projects\\GTools\\src\\errors\\g-logger.spec.ts:7:24)");
    });
    describe("It should test correct contexts", () => {
        it("It should create glogger from class", () => {
            const logger = GLogger.createClassLogger(TmpClass);
            expect(logger.context).to.be.equal(TmpClass.constructor.name);
        });
        it("It should create glogger from constructor", () => {
            const logger = new GLogger("Some context");
            expect(logger.context).to.be.equal("Some context");
        });
        it("It should create glogger from array", () => {
            const logger = GLogger.createArrayLogger([], "Some array context");
            expect(logger.context).to.be.equal("Some array context");
        });

        it("It should text loggers extending", () => {
            const basicLogger              = new GLogger("g43");
            const basicLoggerWithNoContext = new GLogger();
            expect(basicLogger.context).to.be.equal("g43");

            const worldLogger = basicLogger.extends("world");
            expect(worldLogger.context).to.be.equal("g43:world");

            const rootPaintLogger = basicLoggerWithNoContext.extends("paint");
            expect(rootPaintLogger.context).to.be.equal("paint");
        });
    });
    describe("It should test correct logs", () => {
        describe("It should test static logger", () => {
            it("It should test default array logger", () => {
                const testArray: unknown[] = [];
                GLogger.setCallbacks(GLoggerCallbackHolder.createArrayCallbacks(testArray));

                expect(testArray).to.be.empty;

                GLogger.log("hello");
                expect(testArray.length).to.be.equal(1);
                expect(testArray).to.deep.equal([[GLoggerPriority.LOG, ["hello"], ""]]);

                GLogger.error("hello again", "some context");
                expect(testArray.length).to.be.equal(2);
                expect(testArray).to.deep.equal([
                    [GLoggerPriority.LOG, ["hello"], ""],
                    [GLoggerPriority.ERROR, ["hello again"], "some context"],
                ]);

                GLogger.warn(["some", "warning"], "some another context");
                expect(testArray.length).to.be.equal(3);
                expect(testArray).to.deep.equal([
                    [GLoggerPriority.LOG, ["hello"], ""],
                    [GLoggerPriority.ERROR, ["hello again"], "some context"],
                    [GLoggerPriority.WARN, ["some", "warning"], "some another context"],
                ]);
            });
            it("It should test array logger with custom mapper", () => {
                const testArray: unknown[] = [];
                GLogger.setCallbacks(GLoggerCallbackHolder.createArrayCallbacks(testArray, {
                    mapper: (priority, messages, context) => `[${priority}] ${context ? context + ": " : ""}${messages.join(" ")}`,
                }));

                expect(testArray).to.be.empty;

                GLogger.log("hello");
                expect(testArray.length).to.be.equal(1);
                expect(testArray).to.deep.equal([`[${GLoggerPriority.LOG}] hello`]);

                GLogger.error("hello again", "some context");
                expect(testArray.length).to.be.equal(2);
                expect(testArray).to.deep.equal([
                    `[${GLoggerPriority.LOG}] hello`,
                    `[${GLoggerPriority.ERROR}] some context: hello again`,
                ]);

                GLogger.warn(["some", "warning"], "some another context");
                expect(testArray.length).to.be.equal(3);
                expect(testArray).to.deep.equal([
                    `[${GLoggerPriority.LOG}] hello`,
                    `[${GLoggerPriority.ERROR}] some context: hello again`,
                    `[${GLoggerPriority.WARN}] some another context: some warning`,
                ]);
            });
        });
    });
});
