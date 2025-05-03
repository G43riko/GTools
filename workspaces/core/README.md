[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/G43riko/GTools/blob/master/LICENSE)
[![JSR](https://jsr.io/badges/@g43/core)](https://jsr.io/@g43/core)
[![JSR Score](https://jsr.io/badges/@g43/core/score)](https://jsr.io/@g43/core)

# @g43/core

A lightweight utility library providing core functionality for handling value providers in TypeScript applications.

## Installation

```bash
# Using JSR
npx jsr add @g43/core

# Using Deno
import { getValueFromProvider, isProviderFunction } from "jsr:@g43/core";
```

## Features

- **ValueProvider<T, Args>**: A type that can be either a direct value or a function that returns a value
- **isProviderFunction**: Determines if a provider is a function
- **getValueFromProvider**: Retrieves a value from a provider, handling both direct values and functions

## Usage

```typescript
import { getValueFromProvider, type ValueProvider } from "@g43/core";

// Using a direct value
const directValue: ValueProvider<number> = 42;
console.log(getValueFromProvider(directValue)); // 42

// Using a function
const functionValue: ValueProvider<string> = () => "Hello, world!";
console.log(getValueFromProvider(functionValue)); // "Hello, world!"

// Using a function with arguments
const greet: ValueProvider<string, [name: string]> = (name) => `Hello, ${name}!`;
console.log(getValueFromProvider(greet, "User")); // "Hello, User!"
```

## API Documentation

For detailed API documentation, see the [full documentation](https://g43riko.github.io/GTools/).
