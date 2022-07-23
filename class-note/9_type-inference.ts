//타입 추론 기본1
const getB = (b = 10) => {
  return b;
};

//타입 추론 기본2
interface Dropdown<T> {
  value: T;
  title: string;
}
const shoppingItem: Dropdown<string> = {
  value: 'shirt',
  title: 'clothes'
};
