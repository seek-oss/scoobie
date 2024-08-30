---
'scoobie': minor
---

MdxProvider: Add `default` code block directive

This supports use cases like providing successive GraphQL operation samples where argument differences are the focal point:

````markdown
Permutation 1:

```graphql
mutation ($input: Input!) {
  do(input: $input)
}
```

```json default
{
  "input": 1
}
```

Permutation 2:

```graphql
mutation ($input: Input!) {
  do(input: $input)
}
```

```json default
{
  "input": 2
}
```
````
