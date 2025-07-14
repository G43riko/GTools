
/**
 * @module @g43/tools
 *
 * A collection of utility tools for TypeScript applications.
 *
 * This module provides various utilities for common programming tasks:
 * - Color manipulation (RGB, RGBA, HEX, integer formats)
 * - Random number generation and selection
 * - 2D path handling
 * - Extended Map implementation with additional utilities
 * - Grid data structures for 2D applications
 * - Statistics tracking utilities
 */

export * from "./bk-tree.ts";
export * from "./g-map.ts";
export * from "./path-2d.ts";
export * from "./random.ts";
export * from "./stats/bucket.ts";
export * from "./color.ts";
export * from "./holder/2d/grid2-holder.ts";
export * from "./holder/2d/grid2-array-holder.ts";
export * from "./holder/2d/grid2-hash-map-holder.ts";
export * from "./holder/2d/grid2-map-holder.ts";
export * from "./holder/2d/grid2-object-holder.ts";
export * from "./holder/2d/grid2-object-map-holder.ts";
export * from "./holder/2d/grid2-string-holder.ts";

export * from "./stats/boolean-counter.ts";
export * from "./stats/fps-counter.ts";
export * from "./stats/histogram.ts";
export * from "./stats/numeric-counter-tickable.ts";
export * from "./stats/numeric-counter.ts";
