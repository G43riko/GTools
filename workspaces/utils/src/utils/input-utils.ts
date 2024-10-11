import {Keys} from "@g43/enums";

declare type KeyboardEvent = any;
export function extractKeyFromEvent(event: KeyboardEvent): Keys {
    return event.code as Keys;
}