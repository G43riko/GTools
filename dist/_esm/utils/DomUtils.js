import { NotBrowserException } from "gtools/errors";
import { Checkers } from "../dom/deprecated/Checkers";
import { DomGet } from "../dom/dom-get";
export class DomUtils {
    static getWindowHeight() {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
    static getWindowWidth() {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    static text(element, text, append = true) {
        if (append) {
            element.textContent += text;
        }
        else {
            element.textContent = text;
        }
        return element;
    }
    static html(element, html, append = true) {
        if (append) {
            if (typeof html === "string") {
                element.innerHTML += html;
            }
            else if (Checkers.isElement(html)) {
                element.appendChild(html);
            }
        }
        else if (typeof html === "string") {
            element.innerHTML = html;
        }
        else if (Checkers.isElement(html)) {
            element.innerHTML = "";
            element.appendChild(html);
        }
        return element;
    }
    static class(element, name, force = false) {
        if (Array.isArray(name)) {
            for (const className of name) {
                DomUtils.class(element, className, force);
            }
        }
        else {
            switch (name[0]) {
                case "+":
                    element.classList.add(name.substring(1));
                    break;
                case "-":
                    element.classList.remove(name.substring(1));
                    break;
                case "/":
                    name = name.substring(1);
                    if (Checkers.isBoolean(force)) {
                        element.classList.toggle(name, force);
                    }
                    else {
                        element.classList.toggle(name);
                    }
                    break;
                default:
                    return element.classList.contains(name);
            }
        }
        return element;
    }
    static createElement(name, attr, cont, style) {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }
        const el = document.createElement(name);
        if (typeof attr === "object") {
            for (const key in attr) {
                if (attr.hasOwnProperty(key)) {
                    el.setAttribute(key, attr[key]);
                }
            }
        }
        if (typeof style === "object") {
            for (const key in style) {
                if (style.hasOwnProperty(key)) {
                    el.style[key] = style[key];
                }
            }
        }
        if (Array.isArray(cont)) {
            cont.forEach((e) => {
                DomUtils.html(el, e, true);
            });
        }
        else {
            DomUtils.html(el, cont);
        }
        return el;
    }
    static remove(element) {
        const parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }
        return element;
    }
    static position(element) {
        let top = 0;
        let left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            x: left,
            y: top,
        };
    }
    static indexOf(element) {
        let index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }
        return index;
    }
    static size(element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    }
    static serialize(form) {
        const result = {};
        if (!Checkers.isElement(form)) {
            return result;
        }
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }
        const elements = DomGet.byTag("input");
        for (const key in elements) {
            if (!elements.hasOwnProperty(key)) {
                continue;
            }
            const e = elements[key];
            const name = e.getAttribute("name");
            if (name) {
                result[name] = e.getAttribute("value");
            }
        }
        return result;
    }
}
//# sourceMappingURL=DomUtils.js.map