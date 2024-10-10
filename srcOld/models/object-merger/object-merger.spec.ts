import { expect } from "chai";
import "mocha";
import { ObjectMergeDefinitions } from "./object-merge-definitions";
import { ObjectMergeMatchType } from "./object-merge-match-type";
import { ObjectMerger } from "./object-merger";

describe("ObjectMerger", () => {
    it("It should test basic types merging", () => {
        // expect(ObjectMerger.mergeObject(null as any, null as any, {})).to.deep.equal({
        //     mergedResult: null,
        //     matchType   : ObjectMergeMatchType.EQUALS,
        //     valueA      : null,
        //     valueB      : null,
        // });
        expect(ObjectMerger.mergeProperty("gabo", "", {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.VALUE_A,
            valueA      : "gabo",
            valueB      : "",
        });
        expect(ObjectMerger.mergeProperty("", "gabo", {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.VALUE_B,
            valueA      : "",
            valueB      : "gabo",
        });
        expect(ObjectMerger.mergeProperty("gabo", "gabo", {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : "gabo",
            valueB      : "gabo",
        });
        expect(ObjectMerger.mergeProperty(" gabo  ", "  gabo ", {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.INDENT_DIFF,
            valueA      : " gabo  ",
            valueB      : "  gabo ",
        });
        expect(ObjectMerger.mergeProperty<string | null>("gabo", null, {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.VALUE_A,
            valueA      : "gabo",
            valueB      : null,
        });
        expect(ObjectMerger.mergeProperty<string | undefined>(undefined, "gabo", {})).to.deep.equal({
            mergedResult: "gabo",
            matchType   : ObjectMergeMatchType.VALUE_B,
            valueA      : undefined,
            valueB      : "gabo",
        });
        expect(ObjectMerger.mergeProperty<null>(null, null, {})).to.deep.equal({
            mergedResult: null,
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : null,
            valueB      : null,
        });
        expect(ObjectMerger.mergeProperty<null | undefined>(undefined, null, {})).to.deep.equal({
            mergedResult: undefined,
            matchType   : ObjectMergeMatchType.MISS_TYPE,
            valueA      : undefined,
            valueB      : null,
        });
        expect(ObjectMerger.mergeProperty<undefined>(undefined, undefined, {})).to.deep.equal({
            mergedResult: undefined,
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : undefined,
            valueB      : undefined,
        });
        expect(ObjectMerger.mergeProperty({}, {} as any, {})).to.deep.equal({
            mergedResult: {},
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : {},
            valueB      : {},
        });
        expect(ObjectMerger.mergeProperty([], [] as any, {})).to.deep.equal({
            mergedResult: [],
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : [],
            valueB      : [],
        });
        expect(ObjectMerger.mergeProperty([{}, {}], [{}, {}] as any, {})).to.deep.equal({
            mergedResult: [{}, {}],
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : [{}, {}],
            valueB      : [{}, {}],
        });
        expect(ObjectMerger.mergeProperty(true, "true" as any, {})).to.deep.equal({
            mergedResult: true,
            matchType   : ObjectMergeMatchType.MISS_TYPE,
            valueA      : true,
            valueB      : "true",
        });
        expect(ObjectMerger.mergeProperty(false, "false" as any, {})).to.deep.equal({
            mergedResult: false,
            matchType   : ObjectMergeMatchType.MISS_TYPE,
            valueA      : false,
            valueB      : "false",
        });
        expect(ObjectMerger.mergeProperty("123", 123 as any, {})).to.deep.equal({
            mergedResult: "123",
            matchType   : ObjectMergeMatchType.MISS_TYPE,
            valueA      : "123",
            valueB      : 123,
        });
        expect(ObjectMerger.mergeProperty(" 123  ", 123 as any, {})).to.deep.equal({
            mergedResult: "123",
            matchType   : ObjectMergeMatchType.TYPE_AND_INDENT_DIFF,
            valueA      : " 123  ",
            valueB      : 123,
        });
    });

    describe("It should test array object-merger", () => {
        it("It should test empty array", () => {
            expect(ObjectMerger.mergeArray<string>([], [], {})).to.deep.equal({
                valueA      : [],
                valueB      : [],
                mergedResult: [],
                arrayResult : [],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>([], [], {comparator: () => 0})).to.deep.equal({
                valueA      : [],
                valueB      : [],
                mergedResult: [],
                arrayResult : [],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>([], [], {comparator: () => 0, merger: (a) => a})).to.deep.equal({
                valueA      : [],
                valueB      : [],
                mergedResult: [],
                arrayResult : [],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
        });
        it("It should test flat array", () => {
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["d", "e", "f"], {})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["d", "e", "f"],
                mergedResult: [undefined, undefined, undefined],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "a",
                        valueB      : "d",
                    },
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "b",
                        valueB      : "e",
                    },
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "c",
                        valueB      : "f",
                    },
                ],
                matchType   : ObjectMergeMatchType.UNRESOLVED,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["a", "b", "c"], {})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["a", "b", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : "b",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "c",
                        valueA      : "c",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["a", "b", "c"], {comparator: (a, b) => a.localeCompare(b)})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["a", "b", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : "b",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "c",
                        valueA      : "c",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["b", "a", "c"], {})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["b", "a", "c"],
                mergedResult: [undefined, undefined, "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "a",
                        valueB      : "b",
                    },
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "b",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "c",
                        valueA      : "c",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.PARTIALLY_MERGED,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["b", "a", "c"], {comparator: (a, b) => a.localeCompare(b)})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["b", "a", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : "b",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "c",
                        valueA      : "c",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b", "c"], ["b", "a", "c"], {merger: (a) => a, comparator: (a, b) => a.localeCompare(b)})).to.deep.equal({
                valueA      : ["a", "b", "c"],
                valueB      : ["b", "a", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : "b",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "c",
                        valueA      : "c",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.EQUALS,
            });
            expect(ObjectMerger.mergeArray<string>([""], ["  "], {})).to.deep.equal({
                valueA      : [""],
                valueB      : ["  "],
                mergedResult: [""],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.INDENT_DIFF,
                        mergedResult: "",
                        valueA      : "",
                        valueB      : "  ",
                    },
                ],
                matchType   : ObjectMergeMatchType.FULLY_MERGED,
            });
            expect(ObjectMerger.mergeArray<string>(["", " "], ["  ", " "], {})).to.deep.equal({
                valueA      : ["", " "],
                valueB      : ["  ", " "],
                mergedResult: ["", " "],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.INDENT_DIFF,
                        mergedResult: "",
                        valueA      : "",
                        valueB      : "  ",
                    },
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: " ",
                        valueA      : " ",
                        valueB      : " ",
                    },
                ],
                matchType   : ObjectMergeMatchType.FULLY_MERGED,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b"], ["a", "c"], {})).to.deep.equal({
                valueA      : ["a", "b"],
                valueB      : ["a", "c"],
                mergedResult: ["a", undefined],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.UNRESOLVED,
                        mergedResult: undefined,
                        valueA      : "b",
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.PARTIALLY_MERGED,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b"], ["a", "c"], {comparator: (a, b) => a.localeCompare(b)})).to.deep.equal({
                valueA      : ["a", "b"],
                valueB      : ["a", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.EQUALS,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.VALUE_A,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : undefined,
                    },
                    {
                        matchType   : ObjectMergeMatchType.VALUE_B,
                        mergedResult: "c",
                        valueA      : undefined,
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.FULLY_MERGED,
            });
            expect(ObjectMerger.mergeArray<string>(["a", "b"], ["a", "c"], {
                comparator: (a, b) => a.localeCompare(b),
                merger    : (a, b) => a,
            })).to.deep.equal({
                valueA      : ["a", "b"],
                valueB      : ["a", "c"],
                mergedResult: ["a", "b", "c"],
                arrayResult : [
                    {
                        matchType   : ObjectMergeMatchType.MERGED_EXTERNALLY,
                        mergedResult: "a",
                        valueA      : "a",
                        valueB      : "a",
                    },
                    {
                        matchType   : ObjectMergeMatchType.VALUE_A,
                        mergedResult: "b",
                        valueA      : "b",
                        valueB      : undefined,
                    },
                    {
                        matchType   : ObjectMergeMatchType.VALUE_B,
                        mergedResult: "c",
                        valueA      : undefined,
                        valueB      : "c",
                    },
                ],
                matchType   : ObjectMergeMatchType.FULLY_MERGED,
            });
        });

        describe("It should test nested array", () => {
            it("It should equals arrays", () => {
                expect(ObjectMerger.mergeArray<{ name: string }>([{name: "Gabo"}], [{name: "Gabo"}], {})).to.deep.equal({
                    valueA      : [{name: "Gabo"}],
                    valueB      : [{name: "Gabo"}],
                    mergedResult: [{name: "Gabo"}],
                    arrayResult : [
                        {
                            matchType   : ObjectMergeMatchType.EQUALS,
                            mergedResult: {
                                name: "Gabo",
                            },
                            valueA      : {
                                name: "Gabo",
                            },
                            valueB      : {
                                name: "Gabo",
                            },
                        },
                    ],
                    matchType   : ObjectMergeMatchType.EQUALS,
                });

                expect(ObjectMerger.mergeArray<{ name: string }>([{name: "  Gabo"}], [{name: "Gabo  "}], {})).to.deep.equal({
                    valueA      : [{name: "  Gabo"}],
                    valueB      : [{name: "Gabo  "}],
                    mergedResult: [{name: "Gabo"}],
                    arrayResult : [
                        {
                            matchType   : ObjectMergeMatchType.FULLY_MERGED,
                            objectResult: {
                                name: {
                                    matchType   : ObjectMergeMatchType.INDENT_DIFF,
                                    mergedResult: "Gabo",
                                    valueA      : "  Gabo",
                                    valueB      : "Gabo  ",
                                },
                            },
                            mergedResult: {
                                name: "Gabo",
                            },
                            valueA      : {
                                name: "  Gabo",
                            },
                            valueB      : {
                                name: "Gabo  ",
                            },
                        },
                    ],
                    matchType   : ObjectMergeMatchType.FULLY_MERGED,
                });
            });

            it("It should merge makers", () => {
                interface Movie {
                    makers: { name: string; roles: string[] }[];
                }

                const movieA: Movie                         = {
                    makers: [],
                };
                const movieB: Movie                         = {
                    makers: [],
                };
                const movieC: Movie                         = {
                    makers: [
                        {
                            name : "MakerA",
                            roles: ["ACTOR"],
                        },
                        {
                            name : "MakerB",
                            roles: ["DIRECTOR"],
                        },
                    ],
                };
                const movieD: Movie                         = {
                    makers: [
                        {
                            name : "MakerA",
                            roles: ["ACTOR", "WRITER"],
                        },
                        {
                            name : "MakerC",
                            roles: ["ACTOR"],
                        },
                        {
                            name : "MakerB",
                            roles: ["ACTOR"],
                        },
                    ],
                };
                const config: ObjectMergeDefinitions<Movie> = {
                    keys: {
                        makers: {
                            comparator: ((a, b) => a.name.localeCompare(b.name)),
                            keys      : {
                                roles: {
                                    comparator: (a: string, b: string) => a.localeCompare(b),
                                },
                            },
                        },
                    },
                };

                expect(ObjectMerger.mergeObject<Movie>(movieA, movieB, config)).to.deep.equal({
                    matchType   : ObjectMergeMatchType.EQUALS,
                    mergedResult: {
                        makers: [],
                    },
                    objectResult: {
                        makers: {
                            matchType   : ObjectMergeMatchType.EQUALS,
                            mergedResult: [],
                            valueA      : [],
                            valueB      : [],
                        },
                    },
                    valueA      : movieA,
                    valueB      : movieB,
                });

                expect(ObjectMerger.mergeObject<Movie>(movieC, movieD, config).mergedResult).to.deep.equal({
                    makers: [
                        {
                            name : "MakerA",
                            roles: ["ACTOR", "WRITER"],
                        },
                        {
                            name : "MakerB",
                            roles: ["ACTOR", "DIRECTOR"],
                        },
                        {
                            name : "MakerC",
                            roles: ["ACTOR"],
                        },
                    ],
                });
            });
        });
    });

    it("It should test object object-merger", () => {
        const options: ObjectMergeDefinitions<unknown> = {
            comparator: (a, b) => 0,
            merger    : (a, b) => typeof a === "string" ? a.trim() : a,
        };

        const valueA      = Object.freeze({
            name: "Gabo",
            age : 26,
        });
        const valueB      = Object.freeze({
            name        : "Gabo",
            birthdayYear: 1990,

        });
        const resultValue = Object.freeze({
            name        : "Gabo",
            age         : 26,
            birthdayYear: 1990,
        });
        expect(ObjectMerger.mergeObject<unknown>(valueA, valueB, options)).to.deep.equal({
            valueA,
            valueB,
            mergedResult: resultValue,
            objectResult: {
                birthdayYear: {
                    matchType   : ObjectMergeMatchType.VALUE_B,
                    mergedResult: 1990,
                    valueA      : undefined,
                    valueB      : 1990,
                },
                age         : {
                    matchType   : ObjectMergeMatchType.VALUE_A,
                    mergedResult: 26,
                    valueA      : 26,
                    valueB      : undefined,
                },
                name        : {
                    matchType   : ObjectMergeMatchType.EQUALS,
                    mergedResult: "Gabo",
                    valueA      : "Gabo",
                    valueB      : "Gabo",
                },
            },
            matchType   : ObjectMergeMatchType.FULLY_MERGED,
        });
        expect(ObjectMerger.mergeProperty<unknown>(valueA, valueB, options)).to.deep.equal({
            valueA,
            valueB,
            mergedResult: resultValue,
            objectResult: {
                birthdayYear: {
                    matchType   : ObjectMergeMatchType.VALUE_B,
                    mergedResult: 1990,
                    valueA      : undefined,
                    valueB      : 1990,
                },
                age         : {
                    matchType   : ObjectMergeMatchType.VALUE_A,
                    mergedResult: 26,
                    valueA      : 26,
                    valueB      : undefined,
                },
                name        : {
                    matchType   : ObjectMergeMatchType.EQUALS,
                    mergedResult: "Gabo",
                    valueA      : "Gabo",
                    valueB      : "Gabo",
                },
            },
            matchType   : ObjectMergeMatchType.FULLY_MERGED,
        });
    });

    it("It should test deep object object-merger", () => {
        const objA = {
            levelA: {
                levelB: {
                    levelC: {
                        levelD: {
                            value: "A",
                        },
                    },
                },
            },
        };
        expect(ObjectMerger.mergeObject(objA, objA, {})).to.deep.equal({
            matchType   : ObjectMergeMatchType.EQUALS,
            valueA      : objA,
            valueB      : objA,
            mergedResult: objA,
            objectResult: {
                levelA: {
                    matchType   : ObjectMergeMatchType.EQUALS,
                    mergedResult: {
                        levelB: {
                            levelC: {
                                levelD: {
                                    value: "A",
                                },
                            },
                        },
                    },
                    valueA      : {
                        levelB: {
                            levelC: {
                                levelD: {
                                    value: "A",
                                },
                            },
                        },
                    },
                    valueB      : {
                        levelB: {
                            levelC: {
                                levelD: {
                                    value: "A",
                                },
                            },
                        },
                    },
                },
            },
        });
    });

    xit("It should test different arrays", () => {
        const objA = {
            items: [
                {
                    name: "nameA",
                },
                {
                    name: "nameB",
                },
            ],
        };
        const objB = {
            items: [],
        };
        expect(ObjectMerger.mergeObject(objA, objB, {})).to.deep.equal({});
    });
});
