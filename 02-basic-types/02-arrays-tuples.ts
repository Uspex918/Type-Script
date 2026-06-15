const numbersArr: number[] = [1, 2, 3, 4, 5];
const namesArr: string[] = ["Alice", "Mike", "Viktor"]

const mixArr: (string| number)[] = ["Andrey", 5]
mixArr[2] = 1
const personArr: [string, number] = ["Alex", 34]

const someArr: [string, number] = ["1", 1]

console.log(mixArr)
console.log(personArr)

const coordinates: number[] = [10, 20]
const tupleCoordinates: [number, number] = [10, 20]
const mixCoordinates: [number, string, undefined] = [1, "Alice", undefined]
const mixCoordinates2: (number|string|undefined)[] = [1, "Alice", undefined]
console.log(coordinates)
console.log(tupleCoordinates)
console.log(mixCoordinates)
console.log(typeof mixCoordinates2[0])