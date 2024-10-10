export function parseBooleanValue(key: string): boolean | undefined {
    if (/(1|true|yes|ano|áno)/i.exec(key)) {
        return true;
    }
    if (/(0|false|no|nie)/i.exec(key)) {
        return false;
    }
}
