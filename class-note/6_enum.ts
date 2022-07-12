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
console.log(StringEnumShoes.Nike);
console.log(StringEnumShoes.Adidas);
console.log(StringEnumShoes.NewBalance);
console.log(StringEnumShoes.Fila);