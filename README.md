# Tasks

Each task should be done in it's own directory using the code supplied

## Task 1

To get familiar with typescript we will look at the type system in JavaScript.

| Type      | Predicate                          |
| --------- | ---------------------------------- |
| string    | `typeof s === "string"`            |
| number    | `typeof n === "number"`            |
| boolean   | `typeof b === "boolean"`           |
| undefined | `typeof undefined === "undefined"` |
| function  | `typeof f === "function"`          |
| array     | `Array.isArray(a)`                 |

```ts
const variable: Type = value;
```

### Task:

Add types to all variables in index.ts

## Task-2

Arrays are not a "real" type. Run this code to take a look.

```js
console.log(typeof [1, 2, 3]);
console.log(Array.isArray([1, 2, 3]));
```

To define types for an array we can write:

```ts
const array: Type[] = [value1, value2, value3];
```

To declare our own structures for an object we can use types or interfaces.

```ts
interface Interface {
  id: number;
  name: string;
}
type Type = {
  id: number;
  name: string;
};
```

### Task:

Add types or interfaces to the arrays

## Task 3

**Interfaces and types**

For the most part interfaces and types will be the same for us.
Interfaces can be extended or changed, types are set at creation.

```ts
type Type = {
  id: number;
  name: string;
};

interface Interface {
  id: number;
  name: string;
}

interface ExtendedInterface extends Interface {
  content: string;
}

interface Interface {
  content?: string;
}

const interfaceWithContent: Interface = {
  id: 1,
  name: "Ola",
  content: "test",
};
```

### Task:

Add types to the data fetched and function called

## Task 4

Generics

## Task 5

Programming tasks
