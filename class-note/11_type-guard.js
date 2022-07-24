var introduce = function () {
    return { name: 'jeon', skill: 'high', age: 29 };
};
var jeon = introduce();
// 'Developer | Person' 형식에 'skill' 속성이 없습니다.
// 'Person' 형식에 'skill' 속성이 없습니다.
// union 타입으로 반환된 객체는 Developer나, Person에 대한 공통 속성만 접근할 수 있음.
console.log(jeon.skill);
// 타입 단언을 통한 해결방법
if (jeon.skill) {
    var skill = jeon.skill;
    console.log(skill);
}
else if (jeon.age) {
    var age = jeon.age;
    console.log(age);
}
//타입 가드 정의
var isDeveloper = function (target) {
    console.log(target);
};
isDeveloper(jeon);
