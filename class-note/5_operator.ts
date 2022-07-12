//any 타입 일때는 아무런 타입이나 모두 호출 가능하지만, any를 쓰게 된다면 타입을 정의하는 typescript의 의미가 사라짐.
const logMessageAnyFunc = (msg: any) => {
  console.log(msg);
}
logMessageAnyFunc('hello');
logMessageAnyFunc(1004);

//union 타입일때는, string이나 number만 호출 하도록 함
const logMessageUnionFunc = (msg: string | number) => {
  console.log(msg);
}
logMessageUnionFunc('hello');
logMessageUnionFunc(1004);