[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/tools)](https://jsr.io/@g43/tools)
[![JSR Score](https://jsr.io/badges/@g43/tools/score)](https://jsr.io/@g43/tools)

# @g43/tools

A collection of utility tools for TypeScript applications, including color manipulation, random number generation, 2D path handling, and more.

## Installation

```bash
# Using JSR
npx jsr add @g43/tools

# Using Deno
import { Color, Random, Path2D, GMap } from "jsr:@g43/tools";
```

## Features

- **Color**: A comprehensive color manipulation class with support for RGB, RGBA, HEX, and integer color formats
- **Random**: Utilities for generating random numbers, selecting random items, and creating weighted random selections
- **Path2D**: A class for handling 2D paths made up of points
- **GMap**: An extended Map class with additional utility methods
- **Grid Holders**: Various implementations for 2D grid data structures
- **Stats**: Utilities for tracking statistics like FPS, histograms, and counters

## Usage

```typescript
import { Color, Random, Path2D, GMap } from "@g43/tools";

// Color manipulation
const color = new Color(255, 0, 0); // Red
const transparent = color.getTransparent(0.5); // Semi-transparent red
console.log(color.hex); // "#ff0000"

// Random number generation
const random = new Random(42); // Seeded random
const value = random.nextIntBetween(1, 10); // Random integer between 1 and 9
const item = Random.nextItem(["apple", "banana", "orange"]); // Random item from array

// 2D Path handling
const path = new Path2D([{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 20, y: 0 }]);
console.log(path.length); // 3
console.log(path.first); // { x: 0, y: 0 }

// Extended Map
const map = new GMap<string, number>();
map.addIfMissing("key", 42);
const value = map.getOrCreate("missing", 100); // 100
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
