// CubicBezier

function CubicBezierP0(t: number, p: number): number {
    const k = 1 - t;

    return k * k * k * p;
}

function CubicBezierP1(t: number, p: number): number {
    const k = 1 - t;

    return 3 * k * k * t * p;
}

function CubicBezierP2(t: number, p: number): number {
    return 3 * (1 - t) * t * t * p;
}

function CubicBezierP3(t: number, p: number): number {
    return t * t * t * p;
}

export function CubicBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
    return CubicBezierP0(t, p0) + CubicBezierP1(t, p1) + CubicBezierP2(t, p2) + CubicBezierP3(t, p3);
}

// QuadraticBezier
function QuadraticBezierP0(t: number, p: number): number {
    const k = 1 - t;

    return k * k * p;
}

function QuadraticBezierP1(t: number, p: number): number {
    return 2 * (1 - t) * t * p;
}

function QuadraticBezierP2(t: number, p: number): number {
    return t * t * p;
}

export function QuadraticBezier(t: number, p0: number, p1: number, p2: number): number {
    return QuadraticBezierP0(t, p0) + QuadraticBezierP1(t, p1) + QuadraticBezierP2(t, p2);
}
