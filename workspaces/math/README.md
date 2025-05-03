[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/math)](https://jsr.io/@g43/math)
[![JSR Score](https://jsr.io/badges/@g43/math/score)](https://jsr.io/@g43/math)

# @g43/math

A comprehensive math library for TypeScript applications, providing vector and matrix operations for 2D and 3D graphics, physics simulations, and computational geometry.

## Installation

```bash
# Using JSR
npx jsr add @g43/math

# Using Deno
import { Vector2, Vector3, Quaternion } from "jsr:@g43/math";
```

## Features

- **Vector Classes**: Vector2, Vector3, and Vector4 with comprehensive operations
- **Matrix Classes**: Mat3 and Mat4 for 2D and 3D transformations
- **Quaternions**: For efficient and stable 3D rotations
- **Simple Vector Implementations**: Lightweight alternatives for basic use cases
- **Utility Functions**: Common mathematical operations for graphics and physics

## Usage

```typescript
import { Vector2, Vector3, Quaternion } from "@g43/math";

// 2D Vector operations
const position = new Vector2(10, 20);
const velocity = new Vector2(2, 3);
const newPosition = position.add(velocity);
const distance = position.dist(newPosition);

// 3D Vector operations
const point3D = new Vector3(1, 2, 3);
const direction = new Vector3(0, 1, 0);
const normalized = direction.getNormalized();
const dotProduct = point3D.dot(direction);

// Rotation with quaternions
const rotation = Quaternion.fromEuler(45, 30, 0); // degrees
const eulerAngles = rotation.toEuler();
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
