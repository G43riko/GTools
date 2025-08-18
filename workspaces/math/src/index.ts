/**
 * @module @g43/math
 *
 * A comprehensive math library for TypeScript applications.
 *
 * This module provides various mathematical utilities for 2D and 3D operations:
 * - Vector classes (Vector2, Vector3, Vector4) for vector operations
 * - Matrix classes (Mat3, Mat4, SimpleMat3, SimpleMat4) for matrix transformations
 * - Quaternion class for rotation operations
 * - Simple vector implementations for lightweight use cases
 */

export * from "./vector2.ts";
export * from "./vector3.ts";
export * from "./vector4.ts";
export * from "./lat-long.ts";

export * from "./simple-vector.ts";
export * from "./vector-xz.ts";

export * from "./quaternion.ts";

export * from "./simple-mat3.ts";
export * from "./simple-mat4.ts";

export * from "./mat3.ts";
export * from "./mat4.ts";
