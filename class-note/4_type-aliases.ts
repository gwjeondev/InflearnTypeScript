// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number
}

const jeon: Person = {
  name: 'jgw',
  age: 29
}

type MyString = string;
const hello: MyString = 'hello typescript';

type Todo = {
  index: number,
  title: string,
  done: boolean
}

const getTodo = (todo: Todo): void => {
  
}