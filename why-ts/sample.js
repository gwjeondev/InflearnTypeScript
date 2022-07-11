// const sum = (a, b) => {
//   return a + b;
// };

// js를 ts처럼 활용하는 방법
// @ts-check
/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number}
 */
const add2 = (a, b) => {
  return a + b;
};

//error message 발생
add(10, '20');
