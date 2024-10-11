import type { Keys } from "@g43/enums";

export function extractKeyFromEvent(event: any): Keys {
    return event.code as Keys;
}
