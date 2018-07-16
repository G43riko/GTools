"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checkers_1 = require("../dom/Checkers");
/**
 * @typedef {Object} SizeObject
 * @property {number} width
 * @property {number} height
 *
 * @typedef {Object} PositionObject
 * @property {number} x
 * @property {number} y
 */
var DomUtils = /** @class */ (function () {
    function DomUtils() {
    }
    /**
     * Function returns height of window
     *
     * @returns {number}
     */
    DomUtils.getWindowHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    /**
     * Function returns width of window
     *
     * @returns {number}
     */
    DomUtils.getWindowWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    /**
     * Function set, append or returns text of element
     *
     * @param {HTMLElement} element
     * @param {string} text
     * @param {boolean} append
     * @returns {HTMLElement}
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
     * @param {HTMLElement} element
     * @param {string} html
     * @param {boolean} append
     * @returns {HTMLElement}
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
        else {
            if (typeof html === "string") {
                element.innerHTML = html;
            }
            else if (Checkers_1.Checkers.isElement(html)) {
                element.innerHTML = "";
                element.appendChild(html);
            }
        }
        return element;
    };
    /**
     * Function returns, add, remove or toggle elements classes
     *
     * @param {HTMLElement} element
     * @param {string | string[]} name
     * @param {boolean} force
     * @returns {HTMLElement | boolean}
     */
    DomUtils.class = function (element, name, force) {
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
     * @param {string | ObjectCreatorParams} name
     * @param {StringMap} attr
     * @param {string | HTMLElement | HTMLElement[]} cont
     * @param {CSSStyleDeclaration} style
     * @returns {HTMLElement}
     */
    DomUtils.createElement = function (name, attr, cont, style) {
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
     * @param {Element} element
     * @returns {Element}
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
     * @param {HTMLElement} element
     * @returns {PositionObject}
     */
    DomUtils.position = function (element) {
        var top = 0;
        var left = 0;
        var actElement = element;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
        } while (actElement = element.offsetParent);
        return {
            x: left,
            y: top,
        };
    };
    /**
     * Function returns order of element between siblings
     *
     * @param {Element} element
     * @returns {number}
     */
    DomUtils.indexOf = function (element) {
        var index = 0;
        var actElement = element;
        while (actElement = element.previousElementSibling) {
            index++;
        }
        return index;
    };
    /**
     * Function returns object with element size
     *
     * @param {HTMLElement} element
     * @returns {SizeObject}
     */
    DomUtils.size = function (element) {
        return {
            height: element.offsetHeight,
            width: element.offsetWidth,
        };
    };
    return DomUtils;
}());
exports.DomUtils = DomUtils;
