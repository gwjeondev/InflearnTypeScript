//any 타입 일때는 아무런 타입이나 모두 호출 가능하지만, any를 쓰게 된다면 타입을 정의하는 typescript의 의미가 사라짐.
const logMessageAnyFunc = (msg: any) => {
  console.log(msg);
};
logMessageAnyFunc('hello');
logMessageAnyFunc(1004);

//union 타입일때는, string이나 number만 호출 하도록 함
const logMessageUnionFunc = (msg: string | number) => {
  //아래부터 타입가드가 적용된다. (타입 가드: 특정 타입으로 타입의 범위를 좁혀 나가는(필터링 하는) 과정)
  if (typeof msg === 'number') {
    //typescript가 msg의 타입을 추론하는 시점에 if문을 통하여 number라는 것을 알 수 있으므로 if문 안에서 msg는 number 타입에 관련된 기능들을 사용할 수 있다.
    console.log(msg.toString());
  } else if (typeof msg === 'string') {
    //마찬가지로 typescript가 해당 else문 일 때는, string 타입이라고 유추할 수 있으므로 string 타입에 관련된 기능들을 사용할 수 있다.
    console.log(msg.length);
  } else {
    throw new TypeError('value must be string or number'); //값은 string이나 number여야 한다.
  }
};
logMessageUnionFunc('hello');
logMessageUnionFunc(1004);

//union 타입의 변수 정의
const numOrStr: number | string = 10; //number 또는 string

interface Programmer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

//Union 타입의 함수 호출(|)
const askSomeoneUnion = (someone: Programmer | Person) => {
  //someone.name 사용 가능
  //someone.skill, someone.age 사용 불가능 --> 타입가드 처리 필요
};
askSomeoneUnion({ name: 'jeon', skill: 'web' });
askSomeoneUnion({ name: 'jeon', age: 29 });

//InterSection 타입의 함수 호출(&)
const askSomeoneInterSection = (someone: Programmer & Person) => {
  //someone.name 사용 가능
  //someone.skill, someone.age 사용 가능
};
//InterSection 타입은, 합집합과 같다. 두개의 타입을 포함하는 새로운 타입을 사용한다고 생각하자.
//따라서 호출시에는 사람의 속성과 프로그래머의 속성을 모두 가져야 하며 두 interface에서 정해놓은 모든 속성들이 있어야 한다.
askSomeoneInterSection({ name: 'jeon', skill: 'web', age: 29 });
