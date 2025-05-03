[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/enums)](https://jsr.io/@g43/enums)
[![JSR Score](https://jsr.io/badges/@g43/enums/score)](https://jsr.io/@g43/enums)

# @g43/enums

A collection of TypeScript enums for common programming needs.

## Installation

```bash
# Using JSR
npx jsr add @g43/enums

# Using Deno
import { Days, Direction4, Keys } from "jsr:@g43/enums";
```

## Features

- **Days**: Enum for days of the week
- **Directions**: Enums for 2D and 3D directional constants (Direction4, Direction6, Direction7)
- **Keys**: Enum for keyboard key codes
- **Origin**: Enum for origin positions (top-left, center, etc.)
- **Button**: Enum for mouse button types
- **PointerType**: Enum for pointer device types
- **HTTP Status Codes**: Enum for common HTTP response status codes

## Usage

```typescript
import { Days, Direction4, HttpStatusCodes, Keys } from "@g43/enums";

// Using day constants
const today = Days.MON;
console.log(`Today is ${today}`); // "Today is MON"

// Using directions for movement
function move(direction: Direction4) {
    switch (direction) {
        case Direction4.UP:
            console.log("Moving up");
            break;
        case Direction4.DOWN:
            console.log("Moving down");
            break;
            // Handle other directions...
    }
}

// Handling keyboard input
function handleKeyPress(event: KeyboardEvent) {
    if (event.code === Keys.SPACE) {
        console.log("Space key pressed");
    }
}

// Working with HTTP status codes
function handleResponse(statusCode: number) {
    if (statusCode === HttpStatusCodes.OK) {
        console.log("Request successful");
    } else if (statusCode === HttpStatusCodes.NOT_FOUND) {
        console.log("Resource not found");
    }
}
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
