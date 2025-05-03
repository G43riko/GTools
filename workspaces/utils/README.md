[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/utils)](https://jsr.io/@g43/utils)
[![JSR Score](https://jsr.io/badges/@g43/utils/score)](https://jsr.io/@g43/utils)

# @g43/utils

A collection of utility functions for common programming tasks in TypeScript applications.

## Installation

```bash
# Using JSR
npx jsr add @g43/utils

# Using Deno
import { clamp, hex2rgb, shuffle } from "jsr:@g43/utils";
```

## Features

- **Array Utilities**: Functions for working with arrays (chunk, unique, groupBy, partition, shuffle)
- **Color Utilities**: Color conversion and manipulation (hex2rgb, rgb2hex, lerpColor, shadeHexColor)
- **Math Utilities**: Mathematical operations (clamp, lerp, average, isPowerOf2, toDegrees)
- **Object Utilities**: Object manipulation and inspection functions
- **String Utilities**: String formatting, parsing, and manipulation
- **Sorting Algorithms**: Implementation of common sorting algorithms (merge sort, quick sort, insertion sort)
- **Network Utilities**: Functions for handling network requests and URLs
- **Input Utilities**: Utilities for handling user input and events
- **Image Utilities**: Functions for image manipulation and processing

## Usage

```typescript
import { 
  chunk, unique, shuffle,
  hex2rgb, rgb2hex,
  clamp, lerp, average
} from "@g43/utils";

// Array utilities
const chunks = chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
const uniqueItems = unique([1, 2, 2, 3, 3, 3]); // [1, 2, 3]
const randomOrder = shuffle([1, 2, 3, 4, 5]); // e.g., [3, 1, 5, 2, 4]

// Color utilities
const rgbColor = hex2rgb("#FF0000"); // [255, 0, 0]
const hexColor = rgb2hex(0, 255, 0); // "#00FF00"

// Math utilities
const clamped = clamp(150, 0, 100); // 100
const interpolated = lerp(0, 100, 0.5); // 50
const avg = average([10, 20, 30, 40]); // 25
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
