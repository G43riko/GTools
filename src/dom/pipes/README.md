# Pipes

## Examples

```typescript
Holder.select(byClass("my-class")).pipe(
    filterByAttribute("attr-name", (name) => name.indexOf("USER") >= 0),
    mapToChild(byClass("name")),
)
```
