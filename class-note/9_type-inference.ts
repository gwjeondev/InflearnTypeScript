//타입 추론 기본1
const getB = (b = 10) => {
  return b;
};

//타입 추론 기본2
interface Dropdown<T> {
  value: T;
  title: string;
}
const shoppingItem: Dropdown<string> = {
  value: 'shirt',
  title: 'clothes'
};

//타입 추론 기본3
interface Person<T> {
  name: T;
  age: number;
}
//Person 인터페이스를 상속받는 Woman은, 제네릭 타입도 Person에게 전달됨.
interface Woman<T> extends Person<T>{
  job: T;
}
//eunbyul 객체의 타입은 Woman이며, 제네릭 타입은 string이고 해당 Woman 인터페이스는 Person 인터페이스를 상속하므로 제네릭으로 string이 전달됨.
const eunbyul:Woman<string> = {
  name: 'eunbyul',
  age: 25,
  job: 'developer'
}

//Best Common Type(가장 근접한(적절한) 타입으로 추론)
const arr = [1,2,3]; //number
const arr = [1,true,'hello']; //number | boolean | string