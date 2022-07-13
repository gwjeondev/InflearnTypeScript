// const logText = text => {
//   console.log(text);
//   return text;
// }
// logText(10); //10
// logText('hello'); //hello
// logText(true); //true

//제네릭 기본 문법
const logText= <T>(text: T): T => {
  console.log(text);
  return text;
}
logText<string>('hello');