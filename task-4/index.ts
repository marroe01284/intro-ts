// useState<string>("test");
function returnValue<T>(value: T): T {
  return value;
}
const numVal = returnValue<number>(10);
const textVal = returnValue<string>("text");

//make a function that summarizes 
function sum (value1: number, value2:number): number {
    return value1 + value2;
}
console.log(sum(1,2));
console.log("hello", "world");


