// const logText = text => {
//   console.log(text);
//   return text;
// }
// logText(10); //10
// logText('hello'); //hello
// logText(true); //true

//union 문법의 단점
const unionLogText = (text: number | string) => {
  //text 타입이 number인지, string인지 추론이 불가능하기 때문에 number와 string의 기능중 교집합되는 기능만 사용 가능함.
  //if문을 통해 type을 비교하여야 추론이 가능해 if문을 통하여야만 각 타입에 맞는 기능을 사용할 수 있음.
  //text.
  console.log(text);
  return text;
};
const unionLog = unionLogText('10');
//unionLogText function의 return 값이, number인지, string인지 추론할 수 없으므로 argument를 문자 10으로 호출했음에도 return값에서의 split 함수가 호출 불가능함.
//unionLog.split(''); error

//제네릭 기본 문법
const logText = <T>(text: T): T => {
  console.log(text);
  return text;
};
const log = logText<string>('hello');
//generic 호출시 타입을 string으로 지정해주었기 때문에, union 문법과 다르게 string에 관련된 기능들을 사용할 수 있다.
log
  .split('')
  .reverse()
  .join('');

//제네릭의 타입 제한
//아래 extends로 string 타입제한을 하지 않으면, logTextLength 함수는 text의 타입을 추론할 수가 없으므로 length를 사용할 수 없음.
const logTextLength = <T extends string>(text: T): T => {
  console.log(text.length);
};
logTextLength<string>('hello');

//제네릭 타입 제한 keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
const getShoppingItemOption = <T extends keyof ShoppingItem>(item: T): T => {
  console.log(item);
};
//getShoppingItemOption(10); error 발생
//ShoppingItem 인터페이스에 정의 되어있는 key만 인자로 넘길 수 있음.
getShoppingItemOption('name');
