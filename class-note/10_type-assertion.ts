//타입 단언
const a = 'hello' as string;

//타입 단언이 주로 사용 될 때는 HTML DOM을 조작 할 때임
const div = document.querySelector('div'); // HTMLDivElement | Null
//div.innerHTML = 'hi'; typescript는 strict한 type 체크를 할 때 div가 HTMLDivElement인지, null인지 알수 없기 때문에 사용 불가능하고 아래와 같이 해줘야함.
if(div) {
    div.innerHTML = 'hi';
} 

//타입 단언 이용시 if문 생략 가능. typescript보다 개발자 자신이 타입을 더 정확히 알고 있으므로, typescript가 타입을 추론하기 전에 코드상으로 직접 단언함.
const div2 = document.querySelector('div') as HTMLDivElement;
div2.innerHTML = 'hi';