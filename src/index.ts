// NODE
import { GenderType } from "./models/gender.model";

export * from "./utils/ArrayUtils";
// export * from "./utils/DomUtils";
export * from "./utils/FileUtils";
export * from "./utils/MathUtils";
export * from "./utils/MiscUtils";
export * from "./utils/ObjectUtils";
export * from "./utils/StringUtils";
export * from "./utils/TimeUtils";

// WEB
export { ArrayUtils as arrays } from "./utils/ArrayUtils";
export { FileUtils as file } from "./utils/FileUtils";
export { MathUtils as math } from "./utils/MathUtils";
export { DomUtils as dom } from "./utils/DomUtils";
export { MiscUtils as misc } from "./utils/MiscUtils";
export { ObjectUtils as object } from "./utils/ObjectUtils";
export { StringUtils as string } from "./utils/StringUtils";
export { TimeUtils as time } from "./utils/TimeUtils";

export { Checkers as check } from "./dom/Checkers";
export { CanvasManager as canvas } from "./dom/CanvasManager";
export { Get as get } from "./dom/Get";

export { GenderType, Gender } from "./models/gender.model";

export { Encodings } from "./enums/encodings.enum";
export { HttpStatusCodes } from "./enums/http-status-codes.enum";
export { Keys } from "./enums/keys.enum";

/*
export * from "./dom/Checkers";
export * from "./dom/CanvasManager";
export * from "./dom/Get";
*/
