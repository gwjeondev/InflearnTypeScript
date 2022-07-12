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


// 인덱싱. 배열에 data도 인터페이스로 사전에 정의 가능
interface StringArray {
  [index: number]: string;
}
const arr: StringArray = ['a', 'b', 'c'];
//error 발생. arr 배열에는 string 타입만 가능.
//arr[0] = 10;


//딕셔너리 패턴
interface StringRegexDictionary {
  //속성의 key는 string, 값은 정규 표현식
  [key: string]: RegExp;
}
const dic: StringRegexDictionary = {
  cssFile: /\.css$/,
  //error 발생. 값이 정규표현식이 아님.
  //randomFile: 'anfdaudfandfj'
}
//딕셔너리의 key들만 뽑아서 배열로 만든다고 가정했을때, 그 값이 string 이라는걸 추론할 수 있다.
Object.keys(dic).forEach(value => {
})


//인터페이스의 확장
interface Person {
  name: string,
  age: number
}
interface Developer extends Person {
  language: string
}
const programmer: Developer = {
  name: 'jeon',
  age: 29,
  language: 'ts',
  //level: 3 error 발생, 정의된 interface의 규칙에 어긋나므로 할당 불가함.
}