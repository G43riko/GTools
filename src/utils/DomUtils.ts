export class DomUtils {
    public static getWidth(): number {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    public static remove(element: Element): Element {
        const parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }

        return element;
    }

    public static position(element: HTMLElement): { x: number, y: number } {
        let top = 0;
        let left = 0;
        let actElement: Element | null = element;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
        } while (actElement = element.offsetParent);

        return {
            x: left,
            y: top,
        };
    }

    public static indexOf(element: Element): number {
        let index = 0;
        let actElement: Element | null = element;
        while (actElement = element.previousElementSibling) {
            index++;
        }

        return index;
    }

    public static size(element: HTMLElement): { width: number, height: number } {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    }
}
