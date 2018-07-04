export class DomUtils {
    public static getWidth(): number {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
}
