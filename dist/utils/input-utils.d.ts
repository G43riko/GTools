import { Keys } from "../enums";
import { Button } from "../enums/button.enum";
export declare function getButtonFromEvent(event: MouseEvent): Button | undefined;
export declare function getButtonFromEventButtons(button: MouseEvent["button"]): Button | undefined;
export declare function compareEventKey(event: KeyboardEvent, key: Keys): boolean;
