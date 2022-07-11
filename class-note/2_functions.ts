//parameter type a, b number
//return value type number
const sum = (a: number, b: number): number => a + b;

//별개로, js에서는 함수의 parameter가 2개가 정의 되어있고 호출할 때 arguments를 2개 이상 넣어도 아무 문제가 없지만, ts에서는 이를 catch하여 알려줌.

//funcion optinal paramter
const log = (a: number, b?: string) => {
  console.log(a, b);
}

log(100); //parameter에 ?를 붙여주면 함수 호출시 선택적으로 agrument 선택 가능.
log(100, 'number');