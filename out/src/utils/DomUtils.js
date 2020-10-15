"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checkers_1 = require("../dom/Checkers");
var Get_1 = require("../dom/Get");
var NotBrowserException_1 = require("../errors/NotBrowserException");
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    /**
     * Function returns height of window
     *
     * @returns window height in pixels
     */
    DomUtils.getWindowHeight = function () {
        if (typeof window === "undefined") {
            throw new NotBrowserException_1.NotBrowserException();
        }
        // @ts-ignore
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    /**
     * Function returns width of window
     *
     * @returns window width in pixels
     */
    DomUtils.getWindowWidth = function () {
        if (typeof window === "undefined") {
            throw new NotBrowserException_1.NotBrowserException();
        }
        // @ts-ignore
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    /**
     * Function set, append or returns text of element
     *
     * @param element - input element
     * @param text - text to put in element
     * @param append - flag if text should be append or replace previous text
     * @returns element given as input
     */
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
    /**
     * Function set, append or returns html content of element
     *
     * @param element - input element
     * @param html - html to put in element
     * @param append - flag if html should be append or replace previous content
     * @returns element given as input
     */
    DomUtils.html = function (element, html, append) {
        if (append === void 0) { append = true; }
        if (append) {
            if (typeof html === "string") {
                element.innerHTML += html;
            }
            else if (Checkers_1.Checkers.isElement(html)) {
                element.appendChild(html);
            }
        }
        else if (typeof html === "string") {
            element.innerHTML = html;
        }
        else if (Checkers_1.Checkers.isElement(html)) {
            element.innerHTML = "";
            element.appendChild(html);
        }
        return element;
    };
    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param element - input element
     * @param name - class name or list of class names
     * @param force - flag if class should be toggled false
     * @returns boolean if function is used to check class presence otherwise element given as input
     */
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
                    if (Checkers_1.Checkers.isBoolean(force)) {
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
    /**
     * Function crete new element
     *
     * ElementManager.createElement("div") => <div></div>;
     * ElementManager.createElement("div", {id: "ide"}) => <div id="ide"></div>;
     * ElementManager.createElement("div", {}, "text") => <div>text</div>;
     * ElementManager.createElement("div", {}, "<b>text</b>") => <div><b>text</b></div>;
     * ElementManager.createElement("div", {}, "text", {color: "blue"}) => <div style="color: blue;">text</div>
     *
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div"}) => <div></div>;
     * ElementManager.createElement({name: "div", attr: {id: "ide"}}) => <div id="ide"></div>;
     *
     * @param name - name of element or object contains all configuration
     * @param attr - map of all element attributes
     * @param cont - element content. Can be string, element or array of elements
     * @param style - styles that will be applied to the element
     * @returns created element
     */
    DomUtils.createElement = function (name, attr, cont, style) {
        if (typeof document === "undefined") {
            throw new NotBrowserException_1.NotBrowserException();
        }
        var el;
        if (typeof name === "object") {
            return DomUtils.createElement(name.name, name.attr || {}, name.cont || "", name.style);
        }
        el = document.createElement(name);
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
    /**
     * Function remove element
     *
     * @param element - input element
     * @returns removed element
     */
    DomUtils.remove = function (element) {
        var parentElement = element.parentElement;
        if (parentElement) {
            parentElement.removeChild(element);
        }
        return element;
    };
    /**
     * Function returns object with element position
     *
     * @param element - input element
     * @returns position of element
     */
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
    /**
     * Function returns order of element between siblings
     *
     * @param element - input element
     * @returns index of number
     */
    DomUtils.indexOf = function (element) {
        var index = 0;
        while (element) {
            element = element.previousElementSibling;
            index++;
        }
        return index;
    };
    /**
     * Function returns object with element size
     *
     * @param element - input element
     * @returns size of element
     */
    DomUtils.size = function (element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    };
    DomUtils.serialize = function (form) {
        var result = {};
        // if forms is not element
        if (!Checkers_1.Checkers.isElement(form)) {
            return result;
        }
        // if form is not form
        if (form.tagName.toLowerCase() !== "form") {
            return result;
        }
        // get all inputs
        var elements = Get_1.Get.byTag("input");
        // add all values to result object
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
exports.DomUtils = DomUtils;
