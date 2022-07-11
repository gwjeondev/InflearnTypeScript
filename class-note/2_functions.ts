//parameter type a, b number
//return value type number
const sum = (a: number, b: number): number => a + b;

//별개로, js에서는 함수의 parameter가 2개가 정의 되어있지만, 호출할 때 arguments를 2개 이상 넣어도 아무 문제가 없지만, ts에서는 이를 catch하여 알려줌.