const arrayOfNumbers: (string | number)[] = [1, 2, 3, 4, 5, "six"];
const arrayOfStrings = ["one", "two", "three"];

// hover "array" to look at type declaration
type Post ={
  id: number;
  content: string;
}

// interface Post{
//   id: number;
//   content: string;
// }

const array:(string | number | boolean | Post)[] = [1, "two", true, { id: 1, content: "test" }];

//define type on this array
type myType = {
  id: number;
  name?: string;
  age?: number;
  content?: string;
}
const arrayOfObjects:myType[] = [
  { id: 1, name: "Ola", age: 23 },
  { id: 2, name: "Kari" },
  { id: 3, content: "Test content" },
];
