"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransform = exports.createSvg = void 0;
var svgns = "http://www.w3.org/2000/svg";
function createSvg(type) {
    return document.createElementNS(svgns, type);
}
exports.createSvg = createSvg;
function getTransform(selectedElement) {
    var transforms = selectedElement.transform.baseVal;
    if (transforms.numberOfItems === 0 ||
        transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
        var translate = selectedElement.ownerSVGElement.createSVGTransform();
        translate.setTranslate(0, 0);
        selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    }
    return transforms.getItem(0);
}
exports.getTransform = getTransform;
//# sourceMappingURL=svg-utils.js.map