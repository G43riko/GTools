/**************************** NODE ****************************/

// UTILS

export * from "./utils/ArrayUtils";
export * from "./utils/MathUtils";
export * from "./utils/MiscUtils";
export * from "./utils/ObjectUtils";
export * from "./utils/StringUtils";
export * from "./utils/TimeUtils";

export * from "./utils/SlovakStemmer";

/**************************** WEB ****************************/

// UTILS

export { ArrayUtils as arrays } from "./utils/ArrayUtils";
export { MathUtils as math } from "./utils/MathUtils";
export { DomUtils as dom } from "./utils/DomUtils";
export { MiscUtils as misc } from "./utils/MiscUtils";
export { ObjectUtils as object } from "./utils/ObjectUtils";
export { StringUtils as string } from "./utils/StringUtils";
export { TimeUtils as time } from "./utils/TimeUtils";

export { SlovakStemmer as stemmer } from "./utils/SlovakStemmer";

// DOM

export { Checkers as check } from "./dom/Checkers";
export { CanvasManager as canvas } from "./dom/CanvasManager";
export { Get as get } from "./dom/Get";

/**************************** BOTH ****************************/

// UTILS

export * from "./utils/StringCheckers";

// MODELS

export { GenderType, Gender } from "./models/gender.model";

// ENUMS

export * from "./enums/encodings.enum";
export * from "./enums/file-types.enum";
export * from "./enums/http-status-codes.enum";
export * from "./enums/keys.enum";

// COMPONENTS

export * from "./components/ItemCounter";
export * from "./components/FileManager";
export * from "./components/Paginator";

// MATHS

export * from "./math/Vector2f";

// CONFIG

export { initConfig } from "./config/gtools-config";
export { StringMapInterface } from "./interfaces/string-map.interface";

// INTERFACES

export * from "./interfaces/key-value.interface";
export * from "./interfaces/string-map.interface";
export * from "./interfaces/size.interaface";
export * from "./interfaces/point.interaface";
