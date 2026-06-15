const anyValue = ["this is a string", 'how old are you'];
const strLength = anyValue.length;
const _strLength = anyValue.map((item) => item.length);
console.log(strLength);
console.log(_strLength);
let value;
value = 10;
value = "Hello";
value = true;
console.log(typeof value);
if (typeof value === "boolean") {
    value = value.toString().toUpperCase();
}
console.log(value);
export {};
