const add = (a: number, b: number): number => {
  return a + b;
};

const num = add(10, 20);

// add()의 return 타입이 number로 지정이 되어있기 때문에, num 변수를 호출하여 프로퍼티나, 메서드를 사용하고자 할 때 number 타입에 대한 것을 보여준다.
//add.