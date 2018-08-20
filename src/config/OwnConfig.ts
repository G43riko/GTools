import { OwnConfigInterface } from "./OwnConfig.interface";

class ClassOwnConfig implements OwnConfigInterface {
    public LANGUAGE = "";
    public PAGE_LIMIT = 0;
    public URL_API = "";
    public VERSION = "";
    public name = "";
}

export const OwnConfig = new ClassOwnConfig();
