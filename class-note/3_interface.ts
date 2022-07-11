interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용
const chulsu: User = {
  age: 29,
  name: 'kimchulsu'
};


//함수에 인터페이스 활용
const getUser = (user: User): void => {
  console.log(user);
};
const capt = {
  name: '캡틴'
};
//error
//getUser(capt);


//함수의 스펙(구조)에 인터페이스를 활용 ex)라이브러리를 제작하거나, 다수의 개발자와 협업을 할 떄 함수의 규칙을 정할 수 있다.
interface SumFunction {
  (a: number, b: number): number;
}
const sum: SumFunction = (a: number, b: number): number => {
  return a + b;
};


// 인덱싱. 배열에 data도 사전에 정의 가능
interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ['a', 'b', 'c'];
//error 발생. arr 배열에는 string 타입만 가능.
//arr[0] = 10;



