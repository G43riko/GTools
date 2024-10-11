const svgns = "http://www.w3.org/2000/svg";

export function createSvg<T extends keyof SVGElementTagNameMap>(type: T): SVGElementTagNameMap[T] {
    return document.createElementNS(svgns, type);
}

export function getTransform(selectedElement: SVGGraphicsElement): SVGTransform {
    const transforms = selectedElement.transform.baseVal;
    if (
        transforms.numberOfItems === 0 ||
        transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE
    ) {
        const translate = (selectedElement.ownerSVGElement as SVGSVGElement).createSVGTransform();
        translate.setTranslate(0, 0);
        selectedElement.transform.baseVal.insertItemBefore(translate, 0);
    }

    return transforms.getItem(0);
}
/**
 * is sector a full circle?
 * ... this comes up a lot in SVG path-drawing routines
 *
 * N.B. we consider all sectors that span more that 2pi 'full' circles
 *
 * @param aBnds - angular bounds in *radians*
 */
function isFullCircle(aBnds: [number, number]): boolean {
    return Math.abs(aBnds[1] - aBnds[0]) > (Math.PI * 2) - 1e-14;
}

/**
 * path an arc https://github.com/plotly/plotly.js/blob/587d86cc7d7f91f7618c78f9bf847bcff6ee2ac8/src/lib/angles.js#L106
 *
 * @param r : radius
 * @param a0 : first angular coordinate in *radians*
 * @param a1 : second angular coordinate in *radians*
 * @param cx : x coordinate of center
 * @param cy : y coordinate of center
 * @param isClosed - true if path should be closed
 * @return svg path
 */
export function pathArc(r: number, a0: number, a1: number, cx: number, cy: number, isClosed = false): string {
    const r0 = 0;
    const r1 = r;
    cx = cx || 0;
    cy = cy || 0;

    const isCircle = isFullCircle([a0, a1]);
    let aStart;
    let aMid;
    let aEnd;
    let rStart;
    let rEnd;

    if (isCircle) {
        aStart = 0;
        aMid = Math.PI;
        aEnd = Math.PI * 2;
    } else if (a0 < a1) {
        aStart = a0;
        aEnd = a1;
    } else {
        aStart = a1;
        aEnd = a0;
    }

    if (r0 < r1) {
        rStart = r0;
        rEnd = r1;
    } else {
        rStart = r1;
        rEnd = r0;
    }

    // N.B. svg coordinates here, where y increases downward
    function pt(rr: number, a: number): string {
        return String([rr * Math.cos(a) + cx, cy - rr * Math.sin(a)]);
    }

    const largeArc = Math.abs(aEnd - aStart) <= Math.PI ? 0 : 1;

    function arc(rr: number, a: number | undefined, cw: number): string {
        return `A${String([rr, rr])} ${String([0, largeArc, cw])} ${pt(rr, a ?? 0)}`;
    }

    let p;

    if (isCircle) {
        if (rStart === null) {
            p = `M${pt(rEnd, aStart)}${arc(rEnd, aMid, 0)}${arc(rEnd, aEnd, 0)}Z`;
        } else {
            p = `M${pt(rStart, aStart)}${arc(rStart, aMid, 0)}${arc(rStart, aEnd, 0)}Z` +
                `M${pt(rEnd, aStart)}${arc(rEnd, aMid, 1)}${arc(rEnd, aEnd, 1)}Z`;
        }
    } else if (rStart === null) {
        p = `M${pt(rEnd, aStart)}${arc(rEnd, aEnd, 0)}`;
        if (isClosed) {
            p += "L0,0Z";
        }
    } else {
        p = `M${pt(rStart, aStart)}L${pt(rEnd, aStart)}${arc(rEnd, aEnd, 0)}L${pt(rStart, aEnd)}${
            arc(rStart, aStart, 1)
        }Z`;
    }

    return p;
}
