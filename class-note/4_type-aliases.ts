//타입 별칭은 새로운 타입의 값을 하나 생성하는 것이 아니라, 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여한 것과 같음.

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