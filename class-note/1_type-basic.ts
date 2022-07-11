//number
const num: number = 10;

//string
const str: string = 'hello';

//Array - number
const numAry: Array<number> = [1, 2, 3];

//Array - string
const strAry: Array<string> = ['jeon', 'park'];
const strAry2: string[] = ['jeon', 'park']; //strAry === strAry2

//Tuple - Array in value several types
const address: [string, number] = ['gangnam', 99999];

//object
const obj: object = {};
//object property type defined
const person: {name: string, age: number} = {
  name: 'jeon',
  age: 29
}

//boolean
const show: boolean = true;