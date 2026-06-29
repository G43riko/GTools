# Codebase Review: GTools Monorepo

Analysis of `@g43/enums`, `@g43/math`, `@g43/tools`, `@g43/types`, and `@g43/utils`.

---

## Table of Contents

1. [Critical Issues](#1-critical-issues)
2. [Missing Implementations (TODOs)](#2-missing-implementations-todos)
3. [Missing Utility Functions](#3-missing-utility-functions)
4. [Code Quality & Consistency](#4-code-quality--consistency)
5. [Performance Optimizations](#5-performance-optimizations)
6. [Type Safety Improvements](#6-type-safety-improvements)
7. [Test Coverage Gaps](#7-test-coverage-gaps)
8. [Documentation Issues](#8-documentation-issues)
9. [Step-by-Step Fix Plan](#9-step-by-step-fix-plan)

---

## 1. Critical Issues

### 1.1 `Mat4` — Four unimplemented static methods

**File:** `workspaces/math/src/mat4.ts`

All four methods are stubs with a `// TODO: implement` comment and no body. Any consumer calling them will receive `undefined`.

```ts
// CURRENT (broken)
public static createViewMatrix(): void { /* TODO: implement */ }
public static createTransformMatrix(): void { /* TODO: implement */ }
public static createPerspectiveMatrix(): void { /* TODO: implement */ }
public static createOrthographicMatrix(): void { /* TODO: implement */ }
```

**Fix — replace the stubs:**

```ts
/** Creates a look-at view matrix. */
public static createViewMatrix(
  eye: ReadonlySimpleVector3,
  target: ReadonlySimpleVector3,
  up: ReadonlySimpleVector3,
  result: Mat4 = Mat4.create() as Mat4,
): Mat4 {
  result.targetTo(eye, target, up);
  return result;
}

/** Creates a TRS (translation-rotation-scale) transform matrix. */
public static createTransformMatrix(
  translation: ReadonlySimpleVector3,
  rotation: Quaternion,
  scale: ReadonlySimpleVector3,
  result: Mat4 = Mat4.create() as Mat4,
): Mat4 {
  return SimpleMat4.fromRotationTranslationScale(rotation, translation, scale, result) as Mat4;
}

/** Creates a perspective projection matrix. */
public static createPerspectiveMatrix(
  fovY: number,     // field-of-view in radians
  aspect: number,   // width / height
  near: number,
  far: number,
  result: Mat4 = Mat4.create() as Mat4,
): Mat4 {
  const f = 1.0 / Math.tan(fovY / 2);
  const nf = 1 / (near - far);
  const d = result.data;
  d.fill(0);
  d[0]  = f / aspect;
  d[5]  = f;
  d[10] = (far + near) * nf;
  d[11] = -1;
  d[14] = 2 * far * near * nf;
  return result;
}

/** Creates an orthographic projection matrix. */
public static createOrthographicMatrix(
  left: number, right: number,
  bottom: number, top: number,
  near: number, far: number,
  result: Mat4 = Mat4.create() as Mat4,
): Mat4 {
  const lr = 1 / (left - right);
  const bt = 1 / (bottom - top);
  const nf = 1 / (near - far);
  const d = result.data;
  d.fill(0);
  d[0]  = -2 * lr;
  d[5]  = -2 * bt;
  d[10] =  2 * nf;
  d[12] = (left + right) * lr;
  d[13] = (top + bottom) * bt;
  d[14] = (far + near) * nf;
  d[15] = 1;
  return result;
}
```

---

### 1.2 `getAdjacentPositionByData` — silent fallback on unknown direction

**File:** `workspaces/utils/src/direction-utils.ts`

The comment says `// TODO: add warning or somethings here` but the function silently returns the original position for unrecognised `Direction7` values. This makes bugs invisible.

**Fix:**

```ts
default:
  throw new Error(`Unknown direction: ${direction}`);
```

---

### 1.3 `Grid2Holder.forEach` — confusing return-value contract

**File:** `workspaces/tools/src/holder/2d/grid2-holder.ts`

The JSDoc says *"If callback returns false, iteration breaks and function returns false"*, yet several concrete holders (`Grid2ObjectHolder`, `Grid2ObjectMapHolder`, `Grid2MapHolder`, `Grid2StringHolder`) always return `true` from `forEach` regardless of the callback's return value, breaking the documented contract.

**Fix for each non-compliant holder:**

```ts
// example patch for Grid2ObjectHolder
public forEach(callback: (item: T, x: number, y: number) => boolean | void): boolean {
  for (const [key, value] of this._data) {
    const [x, y] = key.split('_').map(Number);
    if (callback(value, x, y) === false) return false;
  }
  return true;
}
```

Apply the same pattern to `Grid2HashMapHolder`, `Grid2MapHolder`, `Grid2ObjectMapHolder`, and `Grid2StringHolder`.

---

## 2. Missing Implementations (TODOs)

### 2.1 `Grid2Holder` — `forEachUntil` rename TODO

**File:** `workspaces/tools/src/holder/2d/grid2-holder.ts`, line comment:
```
// TODO: this should be renamed to forEachUntil
```

**Fix:** Add a `forEachUntil` alias, deprecate `forEach` in the interface, and migrate callers over two releases.

```ts
/** @deprecated use forEachUntil */
forEach(callback: (block: T, x: number, y: number) => boolean | void): boolean;
forEachUntil(callback: (block: T, x: number, y: number) => boolean | void): boolean;
```

---

### 2.2 `FpsCounter.getFps` — approximate FPS when `lastFps === 0`

**File:** `workspaces/tools/src/stats/fps-counter.ts`

```ts
// TODO: if lastFps is zero, we should calculate approximate FPS
public getFps(): number { return this.lastFps; }
```

**Fix:**

```ts
public getFps(): number {
  if (this._lastFps === 0 && this._ticks > 0) {
    // Return a live estimate based on ticks accumulated so far this second
    return this._ticks;
  }
  return this._lastFps;
}
```

---

### 2.3 `Histogram.getSorted` — numeric key sort bug

**File:** `workspaces/tools/src/stats/histogram.ts`

```ts
// TODO: fix issue with sorting if key is number
```

`Object.keys()` always returns strings, so numeric keys sort lexicographically (`"10" < "9"`).

**Fix:**

```ts
public getSorted(sort: "ASC" | "DESC" = "DESC", { minOccurences = 0 } = {}): Record<Key, number> {
  const entries = Object.entries(this._data) as [string, number][];
  const filtered = entries.filter(([, v]) => v >= minOccurences);
  filtered.sort(([, a], [, b]) => sort === "DESC" ? b - a : a - b);
  return Object.fromEntries(filtered) as Record<Key, number>;
}
```

---

### 2.4 `NaiveNearestItem` — unimplemented methods

**File:** `workspaces/tools/src/nearest/naive-nearest-item.ts`

`newClient`, `findNear`, and `updateClient` all have empty bodies or placeholder comments. This class is currently non-functional.

**Fix (brute-force O(n) implementation):**

```ts
private _clients: NaiveNearestItemClient[] = [];

public newClient(position: ReadonlySimpleVector2, _size: ReadonlySimpleVector2): NaiveNearestItemClient {
  const client = { position: { x: position.x, y: position.y } };
  this._clients.push(client);
  return client;
}

public findNear(position: ReadonlySimpleVector2, size: ReadonlySimpleVector2): NaiveNearestItemClient[] {
  const halfW = size.x / 2, halfH = size.y / 2;
  return this._clients.filter(c =>
    Math.abs(c.position.x - position.x) <= halfW &&
    Math.abs(c.position.y - position.y) <= halfH
  );
}

public updateClient(_client: NaiveNearestItemClient): void {
  // position is mutated in-place by the caller; no index to update in brute-force
}
```

---

### 2.5 `randomUtils` — `randomInt()` (no-arg overload) is unimplemented

**File:** `workspaces/utils/src/random-utils.ts`

```ts
export function randomInt(): number   // body missing / falls through to randomIntBetween
```

**Fix:**

```ts
export function randomInt(): number {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}
```

---

### 2.6 `convertDistance` — limited conversion coverage

**File:** `workspaces/utils/src/distance-utils.ts`

The JSDoc admits *"the set of supported conversions is intentionally limited"*, yet there is no `MI → KM` path, no `FT`, `IN`, `YD` round-trips, etc. At minimum add the reverse of every forward path so callers aren't surprised.

---

## 3. Missing Utility Functions

These are absent but would naturally complement what already exists.

### 3.1 `clampVector2` / `clampVector3`

```ts
// workspaces/math/src/vector2.ts  (add as static)
public static clamp(
  vec: ReadonlySimpleVector2,
  min: ReadonlySimpleVector2,
  max: ReadonlySimpleVector2,
  result = new Vector2(),
): Vector2 {
  result.setData(
    Math.min(Math.max(vec.x, min.x), max.x),
    Math.min(Math.max(vec.y, min.y), max.y),
  );
  return result;
}
```

Same pattern for `Vector3`.

---

### 3.2 `lerpVector2` / `lerpVector3`

`Vector2.lerp` already exists — `Vector3` is missing it entirely.

```ts
// workspaces/math/src/vector3.ts
public static lerp<T extends SimpleVector3>(
  start: ReadonlySimpleVector3,
  end: ReadonlySimpleVector3,
  t: number,
  result: T = new Vector3() as unknown as T,
): T {
  result.x = start.x + (end.x - start.x) * t;
  result.y = start.y + (end.y - start.y) * t;
  result.z = start.z + (end.z - start.z) * t;
  return result;
}
```

---

### 3.3 `debounce` / `throttle` — missing from `@g43/utils`

```ts
// workspaces/utils/src/function-utils.ts  (new file)

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delayMs: number,
): (...args: Args) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}

export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  intervalMs: number,
): (...args: Args) => void {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= intervalMs) {
      last = now;
      fn(...args);
    }
  };
}
```

Export from `workspaces/utils/src/index.ts`.

---

### 3.4 `deepClone` / `deepEqual` — missing from `@g43/utils`

```ts
// workspaces/utils/src/object-utils.ts  (add at bottom)

export function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  const keysA = Object.keys(a as object);
  const keysB = Object.keys(b as object);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
}
```

---

### 3.5 `range` generator — missing from `@g43/utils`

```ts
// workspaces/utils/src/iterator-utils.ts  (add as static or standalone)

export function* range(start: number, end: number, step = 1): Generator<number> {
  for (let i = start; i < end; i += step) yield i;
}
```

---

### 3.6 `Vector2.fromSimple` / `Vector3.fromSimple` — quality-of-life constructors

Many callers do `new Vector2(v.x, v.y)`. A named factory makes intent clearer and avoids errors when argument order changes.

```ts
// Already exists as Vector2.fromVec — just needs wider JSDoc visibility / export alias
public static fromSimple(v: ReadonlySimpleVector2): Vector2 {
  return new Vector2(v.x, v.y);
}
```

---

### 3.7 `Histogram.merge` — combine two histograms

```ts
// workspaces/tools/src/stats/histogram.ts
public merge(other: Histogram<Key>): void {
  other.forEach((key, count) => {
    for (let i = 0; i < count; i++) this.add(key);
  });
}

// Requires a forEach on Histogram — also missing, add:
public forEach(callback: (key: Key, count: number) => void): void {
  for (const [key, count] of Object.entries(this._data)) {
    callback(key as Key, count as number);
  }
}
```

---

### 3.8 `Color.toHsl` / `Color.fromHsl` — round-trip HSL

`rgb2hsl` and `hsl2rgb` already exist in `color-utils.ts` but the `Color` class never exposes them.

```ts
// workspaces/tools/src/color.ts

public get hsl(): readonly [h: number, s: number, l: number] {
  return rgb2hsl(this.red, this.green, this.blue);
}

public static fromHsl(h: number, s: number, l: number, alpha = 255): Color {
  const [r, g, b] = hsl2rgb(h, s, l);
  return new Color(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), alpha);
}
```

---

## 4. Code Quality & Consistency

### 4.1 `AbstractArrayHolder.fill` — abstract but signature differs per subclass

`ArrayNibbleHolder.fill(item: NibbleType)` and `TypedArrayHolder` use the same pattern but there is no shared `fill` contract in the abstract class. The abstract method is declared but each concrete class can silently deviate.

**Fix:** Strengthen the abstract declaration:

```ts
public abstract fill(item: Item): void;
```

Ensure both `ArrayHolder` and `TypedArrayHolder` also implement this (currently `ArrayHolder` is missing `fill`).

---

### 4.2 `KeyValueCounter` — marked `@deprecated` but still exported

**File:** `workspaces/tools/src/stats/key-value-counter.ts`

The class is deprecated in favour of `Histogram` but is still a first-class export. Schedule removal and add a migration comment.

**Fix:**

```ts
/**
 * @deprecated Use {@link Histogram} instead. Will be removed in v0.1.0.
 * Migration: replace `new KeyValueCounter()` with `new Histogram<string>()`.
 */
export class KeyValueCounter { ... }
```

---

### 4.3 `randomUtils` — global `Math.random` vs seeded `Random` class inconsistency

All functions in `random-utils.ts` use `Math.random()` (non-seeded), while `Random` in `@g43/tools` provides a seeded LCG. Consumers who need reproducible results must use `Random`, but the import path crosses package boundaries. Consider re-exporting `Random` from `@g43/utils` or documenting the distinction clearly.

---

### 4.4 `min()` in `array-utils.ts` — deprecated but still present with no removal target

```ts
/** @deprecated use Math.min instead */
export function min(array: readonly number[]): number
```

Set a removal version in the JSDoc and add a lint rule or test that enforces the deprecation.

---

### 4.5 Inconsistent `get length` vs `getCount()` duality

`KeyValueCounter` has both `get length` and `getCount()` (deprecated). `NumericCounter` has `getCount()` but no `length` getter. Standardise on `get length` across all counter/holder classes.

---

### 4.6 `GMap.get` override — default value typing is unsound

```ts
public override get(key: Key): Value | undefined;
public override get(key: Key, defaultValue: Value): Value;
```

If `Value` itself can be `undefined`, the overload that returns `Value` can return `undefined` even when a default was supplied. Add a generic guard:

```ts
public override get<D extends Value | undefined = undefined>(
  key: Key,
  defaultValue?: D,
): Value | D {
  return super.get(key) ?? (defaultValue as D);
}
```

---

## 5. Performance Optimizations

### 5.1 `Grid2ArrayHolder.getNearest` — unbounded BFS without early exit limit

`getNearest` expands indefinitely until it finds all matching cells, which can scan the entire grid. Add a `maxResults` parameter.

```ts
public getNearest(
  x: number, y: number,
  condition: (item: T) => boolean,
  maxResults = Infinity,
): Grid2Block<T>[] {
  // existing BFS but break when results.length >= maxResults
}
```

---

### 5.2 `shuffle` in `array-utils.ts` — unnecessary `result` pre-copy

The current implementation copies the array then Fisher-Yates shuffles in-place. This is already optimal. However the internal comment says "copy faster than spread" — verify this is still true for modern V8 (it is, good), but add a microbenchmark assertion to prevent regressions.

---

### 5.3 `levenshtein` — the new implementation vs `levenshteinOld` in benchmarks

The bench file shows `levenshteinOlder` (full 2D matrix) and presumably the current implementation uses a single-row rolling array. Confirm the rolling-array approach is used; if the 2D matrix version remains, replace it:

```ts
export const levenshtein = (a: string, b: string): number => {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    for (let j = 1; j <= b.length; j++) {
      curr[j] = a[i - 1] === b[j - 1]
        ? prev[j - 1]
        : 1 + Math.min(prev[j], curr[j - 1], prev[j - 1]);
    }
    prev = curr;
  }
  return prev[b.length];
};
```

---

### 5.4 `occurrences` — use `indexOf` loop instead of regex for non-overlapping case

The non-overlapping path can avoid regex overhead:

```ts
export function occurrences(text: string, key: string, overlapping = false): number {
  if (!key) return 0;
  let count = 0, pos = 0;
  const step = overlapping ? 1 : key.length;
  while ((pos = text.indexOf(key, pos)) !== -1) { count++; pos += step; }
  return count;
}
```

---

### 5.5 `hash2Numbers` / `hash3Numbers` — potential integer overflow

The Cantor pairing approach used can exceed `Number.MAX_SAFE_INTEGER` for large coordinates. Replace with a bitwise FNV-1a variant or document the safe input range.

```ts
// Safer: FNV-like mixing, stays within 32-bit
export function hash2Numbers(x: number, y: number): number {
  let h = (x * 2654435761) ^ (y * 2246822519);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  return h >>> 0; // uint32
}
```

---

## 6. Type Safety Improvements

### 6.1 `filter-utils.ts` — `any` used extensively

`getNestedProperty`, `testCondition`, and `parseCondition` use untyped `any` throughout. Introduce a `JsonValue` helper type:

```ts
type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
```

And narrow the internal types accordingly.

---

### 6.2 `input-utils.ts` — `extractPointerTypeFromPointerEvent` returns `any`

```ts
export function extractPointerTypeFromPointerEvent(event: PointerEvent): any
```

Should return `PointerType`:

```ts
export function extractPointerTypeFromPointerEvent(event: PointerEvent): PointerType {
  switch (event.pointerType) {
    case "mouse":   return PointerType.MOUSE;
    case "pen":     return PointerType.PEN;
    case "touch":   return PointerType.TOUCH;
    default:        return PointerType.UNKNOWN;
  }
}
```

---

### 6.3 `image-utils.ts` — `params` typed as mutable object should be `Readonly`

```ts
// current
export function imageToContext(image: HTMLImageElement, params: { readonly rotate?: number } = {}): ...

// already correct syntax-wise but the = {} default creates a fresh mutable object each call.
// Move the default to a module-level const:
const DEFAULT_IMAGE_PARAMS = Object.freeze({ rotate: undefined });
```

---

### 6.4 `Vector3.rotate` — method mutates `result` via confusing chain calls

The inline comments show a complex mutation chain (`result.cross(this.mulNum(...))`) where `mulNum` mutates `this`. This is dangerous if `this === result`. Add a guard or use a temporary:

```ts
public static rotate(vector: SimpleVector3, axis: ReadonlySimpleVector3, angle: number): void {
  const sin = Math.sin(angle), cos = Math.cos(angle);
  const tmp = Vector3.crossStatic(vector, axis);
  tmp.mulNum(sin);
  const axisScaled = Vector3.mulNum(axis, Vector3.dot(vector, axis) * (1 - cos));
  vector.x = vector.x * cos + tmp.x + axisScaled.x;
  vector.y = vector.y * cos + tmp.y + axisScaled.y;
  vector.z = vector.z * cos + tmp.z + axisScaled.z;
}
```

---

## 7. Test Coverage Gaps

### 7.1 Skipped tests in `format-utils.spec.ts`

The `.deno-report.xml` shows **5 tests, all skipped** (`<skipped />`). These need to be enabled and asserted properly.

**Step:** Remove `it.skip` / `describe.skip` wrappers and fix any underlying implementation bugs found.

---

### 7.2 `Mat4` — commented-out rotation tests

```ts
// expect(Mat4.fromXRotation(0)).toEqual(Mat4.create());
// Commented because error during comparison 0 and -0
```

**Fix:** Use `toBeCloseTo` or write a custom `almostEqual` matrix matcher instead of leaving tests permanently disabled.

```ts
function matAlmostEqual(a: Mat4, b: Mat4, epsilon = 1e-10): boolean {
  return a.data.every((v, i) => Math.abs(v - b.data[i]) < epsilon);
}

it("fromXRotation(0) returns identity", () => {
  expect(matAlmostEqual(Mat4.fromXRotation(0), Mat4.create())).toBe(true);
});
```

---

### 7.3 `Grid2HashMapHolder`, `Grid2ObjectHolder`, `Grid2ObjectMapHolder` — empty spec files

The spec files import the classes but contain no test cases.

**Minimum tests to add for each:**

```ts
describe("Grid2HashMapHolder", () => {
  it("set and get", () => { ... });
  it("length increments on new key", () => { ... });
  it("delete removes entry", () => { ... });
  it("forEach iterates all entries", () => { ... });
  it("clear empties the holder", () => { ... });
});
```

---

### 7.4 `NaiveNearestItem` — zero tests

No spec file exists. After implementing the methods (see §2.4), add:

```ts
// workspaces/tools/src/nearest/naive-nearest-item.spec.ts
describe("NaiveNearestItem", () => {
  it("findNear returns clients within bounds", () => { ... });
  it("findNear returns empty when no clients overlap", () => { ... });
});
```

---

### 7.5 `observable` — edge case: register during notification

`ObservableNonReentrant` is designed to prevent re-entrant notifications but the spec only tests the basic non-reentrant lock. Add a test that registers a new listener *during* a notification and asserts it does not receive the current message.

---

## 8. Documentation Issues

### 8.1 `SimpleMat4` layout comment is wrong

```ts
/**
 * 00 04 08 12
 * 01 05 09 13
 * 02 06 10 14
 * 03 07 11 14   ← last element should be index 15
 */
```

**Fix:** Change `11 14` to `11 15`.

---

### 8.2 `Vector3.rotate` comments reference deleted code

```ts
// return this.cross(axis.mul(sinAngle)).add(           //Rotation on local X
```

These commented-out lines are stale and should be removed.

---

### 8.3 `Grid2Holder` — TODO comment leaks into public API

```ts
/**
 * TODO: create ReadonlyGrid2Holder<T> and add method `toReadonly(): ReadonlyGrid2Holder<T>`
 */
export interface Grid2Holder<T> { ... }
```

Either implement `ReadonlyGrid2Holder<T>` or move the TODO to an internal tracking issue and remove it from the public JSDoc.

---

### 8.4 `@g43/math` `index.ts` exports nothing

`workspaces/math/src/index.ts` contains only a JSDoc module comment with no actual `export` statements. All classes must be individually imported by package path. Add proper re-exports:

```ts
export { Vector2 } from "./vector2.ts";
export { Vector3 } from "./vector3.ts";
export { Vector4 } from "./vector4.ts";
export { Mat3 } from "./mat3.ts";
export { Mat4 } from "./mat4.ts";
export { Quaternion } from "./quaternion.ts";
export { SimpleVector } from "./simple-vector.ts";
export { LatLong } from "./lat-long.ts";
export type * from "./vector.ts";
```

Same issue exists for `@g43/enums`, `@g43/types`, `@g43/utils`, and `@g43/tools` `index.ts` files — verify each has explicit re-exports.

---

## 9. Step-by-Step Fix Plan

Work through these in priority order. Each step is self-contained and safe to merge independently.

---

### Step 1 — Fix broken `Mat4` methods *(Critical, ~1h)*
- Open `workspaces/math/src/mat4.ts`
- Replace the four stub methods with the implementations from §1.1
- Add corresponding tests to `mat4.spec.ts`

### Step 2 — Fix `index.ts` barrel exports *(Critical, ~30min)*
- Add `export { ... } from "./<file>.ts"` lines to every package `index.ts`
- Verify with `deno check workspaces/math/src/index.ts` etc.

### Step 3 — Fix `SimpleMat4` JSDoc typo *(Trivial, 5min)*
- Change `03 07 11 14` → `03 07 11 15` in the matrix layout comment

### Step 4 — Fix `forEach` contract in Grid holders *(High, ~1h)*
- Update `Grid2ObjectHolder`, `Grid2HashMapHolder`, `Grid2MapHolder`, `Grid2ObjectMapHolder`, `Grid2StringHolder` so they return `false` when the callback returns `false`
- Enable the matching assertions in the spec files

### Step 5 — Add missing `Mat4` rotation tests *(Medium, ~30min)*
- Write `matAlmostEqual` helper
- Re-enable commented-out tests in `mat4.spec.ts` and `simple-mat3.spec.ts`

### Step 6 — Enable skipped `format-utils` tests *(Medium, ~45min)*
- Remove `skip` wrappers, fix any failing assertions, verify `.deno-report.xml` reports 0 skipped

### Step 7 — Implement `NaiveNearestItem` *(Medium, ~45min)*
- Add the brute-force implementation from §2.4
- Create `naive-nearest-item.spec.ts`

### Step 8 — Fix `extractPointerTypeFromPointerEvent` return type *(Low, ~15min)*
- Replace `: any` with `: PointerType` and add a switch (§6.2)

### Step 9 — Fix `Histogram.getSorted` numeric key ordering *(Medium, ~20min)*
- Apply the sort fix from §2.3
- Add a test with numeric keys `[2, 10, 9]` that verifies order

### Step 10 — Add `debounce`, `throttle`, `range`, `deepClone`, `deepEqual` *(Low, ~1h)*
- Create `workspaces/utils/src/function-utils.ts` with §3.3
- Add `deepClone`/`deepEqual` to `object-utils.ts` (§3.4)
- Add `range` generator to `iterator-utils.ts` (§3.5)
- Export all from `index.ts`

### Step 11 — Add `Vector3.lerp` and `Vector2.clamp` / `Vector3.clamp` *(Low, ~30min)*
- Add static methods per §3.1 and §3.2
- Add unit tests

### Step 12 — Expose `Color.toHsl` / `Color.fromHsl` *(Low, ~20min)*
- Wire up existing `rgb2hsl` / `hsl2rgb` helpers per §3.8

### Step 13 — Fix `hash2Numbers` overflow *(Low, ~15min)*
- Replace the current pairing formula with the FNV-like `Math.imul` approach from §5.5

### Step 14 — Add `Histogram.forEach` + `Histogram.merge` *(Low, ~20min)*
- Implement per §3.7 and add tests

### Step 15 — Clean up stale comments and deprecation markers *(Cleanup, ~30min)*
- Remove commented-out code in `vector3.ts`
- Add removal version to `KeyValueCounter` and `min()`
- Remove TODO from `Grid2Holder` public JSDoc
- Remove the default `direction` fallback warning TODO and throw instead (§1.2)

---

*Total estimated effort: ~8–10 hours for a single developer working sequentially.*