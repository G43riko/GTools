/**************************** NODE ****************************/

// UTILS

export * from "./utils/ArrayUtils";
export * from "./utils/FileUtils";
export * from "./utils/MathUtils";
export * from "./utils/MiscUtils";
export * from "./utils/ObjectUtils";
export * from "./utils/StringUtils";
export * from "./utils/TimeUtils";

export * from "./utils/SlovakStemmer";

/**************************** WEB ****************************/

// DOM

export * from "./dom/Checkers";
export * from "./dom/CanvasManager";
export * from "./dom/Get";

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

export * from "./components/KeyValueCounter";
export * from "./components/FileManager";
export * from "./components/Paginator";

// MATHS

export * from "./math/Vector2f";

// CONFIG

export { initConfig } from "./config/gtools-config";

// INTERFACES

export * from "./interfaces/key-value.interface";
export * from "./interfaces/string-map.interface";
export * from "./interfaces/size.interaface";
export * from "./interfaces/point.interaface";
