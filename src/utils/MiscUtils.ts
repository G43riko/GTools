export class MiscUtils {
    public static getErrorMessage(error: any): string {
        let textMessageKey = "error.system_error";

        if (typeof error === "string") {
            textMessageKey = error;
        }
        else if (error.error) {
            const errorJson = error.error;
            if (errorJson.message) {
                textMessageKey = errorJson.message;
            }
        }
        else if (typeof error === "object") {
            if (error.message) {
                textMessageKey = error.message;
            }
        }

        // dočasné chyby
        if (textMessageKey.toLocaleLowerCase() === "timeout") {
            textMessageKey = "error.timeout";
        }
        else if (textMessageKey.toLocaleLowerCase() === "no matching constant for [555]") {
            textMessageKey = "error.unknownConstant555";
        }

        return textMessageKey;
    }
}
