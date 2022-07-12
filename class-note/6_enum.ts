//숫자형 Enum
enum NumberEnumShoes {
  Nike,
  Adidas,
  NewBalance = 10,
  Fila
}
console.log(NumberEnumShoes.Nike); //0
console.log(NumberEnumShoes.Adidas); //1
console.log(NumberEnumShoes.NewBalance); //10
console.log(NumberEnumShoes.Fila); //1

//문자형 Enum
enum StringEnumShoes {
  Nike = '나이키',
  Adidas = '아디다스',
  NewBalance = '뉴발란스',
  Fila = '필라'
}
console.log(StringEnumShoes.Nike); //나이키
console.log(StringEnumShoes.Adidas); //아디다스
console.log(StringEnumShoes.NewBalance); //뉴발란스
console.log(StringEnumShoes.Fila); //필라

//Enum 활용 사례(드롭 다운 사례나, 미리 정의된 값을 사용 활용할 때)
// const askQuestion = (answer) => {
//   if(answer === 'yes') {
//     console.log('정답');
//   }
//   else if(answer === 'no') {
//     console.log('오답');
//   }
// }
// //불 확실한 값 전달 가능성 있음
// askQuestion('Yes');
// askQuestion('N');
enum Answer {
  Yes = 'Y',
  No = 'N'
}

const askQuestion = (answer: Answer) => {
    if (answer === Answer.Yes) {
      console.log('정답');
    } else if (answer === Answer.No) {
      console.log('오답');
    }
}
//명확한 값 전달 가능
askQuestion(Answer.Yes);
askQuestion(Answer.No);
