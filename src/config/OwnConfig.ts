import { ClassGToolsConfig } from "./gtools-config";
import { OwnConfigInterface } from "./OwnConfig.interface";

class ClassOwnConfig extends ClassGToolsConfig implements OwnConfigInterface {
    public name = "";
}

export const OwnConfig = new ClassOwnConfig();
