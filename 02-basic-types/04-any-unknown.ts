const anyValue: any = ["this is a string", 'how old are you'];
const strLength: number = anyValue.length;
const _strLength: number = anyValue.map((item: any) => item.length);

console.log(strLength)
console.log(_strLength)


let value: unknown;

value = 10
value = "Hello"
value = true

console.log(typeof value)
if (typeof value === "boolean") {
    value = value.toString().toUpperCase();
}
console.log(value);

