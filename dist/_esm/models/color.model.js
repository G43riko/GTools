import { hex2rgb, int2rgb, rgb2hex, rgb2int } from "gtools/utils";
function checkColorValue(value) {
    console.assert(value >= 0);
    console.assert(value <= 255);
}
export class Color {
    constructor(red, green, blue, alpha = 255) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        checkColorValue(red);
        checkColorValue(green);
        checkColorValue(blue);
        checkColorValue(alpha);
    }
    get rgb() {
        return [this.red, this.green, this.blue];
    }
    get rgbString() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
    get rgba() {
        return [this.red, this.green, this.blue, this.alpha];
    }
    get hex() {
        return rgb2hex(Math.floor(this.red), Math.floor(this.green), Math.floor(this.blue));
    }
    get int() {
        return rgb2int(this.red, this.green, this.blue);
    }
    static fromHex(color) {
        const value = hex2rgb(color);
        return new Color(...value);
    }
    static fromInt(color) {
        const value = int2rgb(color);
        return new Color(...value);
    }
    normalized() {
        if (this.red > 1 || this.green > 1 || this.blue > 1 || this.alpha > 1) {
            return new Color(this.red / 255, this.green / 255, this.blue / 255, this.alpha / 255);
        }
        return this;
    }
}
Color.BLACK = new Color(0, 0, 0);
Color.WHITE = new Color(255, 255, 255);
Color.GRAY = new Color(128, 128, 128);
Color.RED = new Color(255, 0, 0);
Color.GREEN = new Color(0, 255, 0);
Color.BLUE = new Color(0, 0, 255);
//# sourceMappingURL=color.model.js.map