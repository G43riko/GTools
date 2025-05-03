[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/types)](https://jsr.io/@g43/types)
[![JSR Score](https://jsr.io/badges/@g43/types/score)](https://jsr.io/@g43/types)

# @g43/types

A collection of TypeScript type definitions for common data structures and utility types.

## Installation

```bash
# Using JSR
npx jsr add @g43/types

# Using Deno
import { SimpleVector2, MinMax3D, PartiallyOptional } from "jsr:@g43/types";
```

## Features

- **Vector Types**: Simple vector interfaces for 2D, 3D, and 4D coordinates
- **Size Types**: Interfaces for representing 2D and 3D sizes
- **Position and Size**: Combined position and size interfaces for 2D and 3D
- **Min-Max Bounds**: Types for representing bounding boxes in 2D and 3D
- **Alignment Options**: Enums for horizontal and vertical alignment
- **Utility Types**: Helper types like `PartiallyOptional` and `PartiallyRequired`
- **Coordinate Types**: XYWH and XYZWHD interfaces for position and dimensions

## Usage

```typescript
import { MinMax3D, PartiallyOptional, SimpleVector2 } from "@g43/types";

// Using vector types
const point: SimpleVector2 = { x: 10, y: 20 };

// Using bounding box types
const boundingBox: MinMax3D = {
    min: { x: 0, y: 0, z: 0 },
    max: { x: 10, y: 20, z: 30 },
};

// Using utility types
interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

// Only avatar is optional, everything else is required
type NewUserForm = PartiallyOptional<User, "avatar">;
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
