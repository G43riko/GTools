import { NotBrowserException } from "gtools/errors";
import { DomGet } from "../dom/dom-get";
import * as Checkers from "../validators/misc-validators";
var DomUtils = (function () {
    function DomUtils() {
    }
    DomUtils.getWindowHeight = function () {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    DomUtils.getWindowWidth = function () {
        if (typeof window === "undefined") {
            throw new NotBrowserException();
        }
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    DomUtils.text = function (element, text, append) {
        if (append === void 0) { append = true; }
        if (append) {
            element.textContent += text;
        }
        else {
            element.textContent = text;
        }
        return element;
    };
    DomUtils.html = function (element, html, append) {
        if (append === void 0) { append = true; }
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
    };
    DomUtils.class = function (element, name, force) {
        if (force === void 0) { force = false; }
        if (Array.isArray(name)) {
            for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
                var className = name_1[_i];
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
    };
    DomUtils.createElement = function (name, attr, cont, style) {
        if (typeof document === "undefined") {
            throw new NotBrowserException();
        }
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }
        var el = document.createElement(name);
        if (typeof attr === "object") {
            for (var key in attr) {
                if (attr.hasOwnProperty(key)) {
                    el.setAttribute(key, attr[key]);
                }
            }
        }
        if (typeof style === "object") {
            for (var key in style) {
                if (style.hasOwnProperty(key)) {
                    el.style[key] = style[key];
                }
            }
        }
        if (Array.isArray(cont)) {
            cont.forEach(function (e) {
                DomUtils.html(el, e, true);
            });
        }
        else {
            DomUtils.html(el, cont);
        }
        return el;
    };
    DomUtils.remove = function (element) {
        var parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }
        return element;
    };
    DomUtils.position = function (element) {
        var top = 0;
        var left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            x: left,
            y: top,
        };
    };
    DomUtils.indexOf = function (element) {
        var index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }
        return index;
    };
    DomUtils.size = function (element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    };
    DomUtils.serialize = function (form) {
        var result = {};
        if (!Checkers.isElement(form)) {
            return result;
        }
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }
        var elements = DomGet.byTag("input");
        for (var key in elements) {
            if (!elements.hasOwnProperty(key)) {
                continue;
            }
            var e = elements[key];
            var name_2 = e.getAttribute("name");
            if (name_2) {
                result[name_2] = e.getAttribute("value");
            }
        }
        return result;
    };
    return DomUtils;
}());
export { DomUtils };
//# sourceMappingURL=DomUtils.js.map