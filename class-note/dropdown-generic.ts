interface Email {
  value: string;
  selected: boolean;
}

interface ProductNumber {
  value: number;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

const createDropdownItem = (item: Email | ProductNumber) => {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
};

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (emails) {
  const item = createDropdownItem(emails);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

// NOTE: 제품 번호 드롭 다운 아이템 추가
numberOfProducts.forEach(function (products) {
  const item = createDropdownItem(products);
  const selectTag = document.querySelector('#product-dropdown');
  selectTag.appendChild(item);
});

