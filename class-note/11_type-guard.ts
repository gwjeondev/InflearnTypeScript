interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const introduce = (): Developer | Person => {
  return { name: 'jeon', skill: 'high', age: 29 };
};

const jeon = introduce();
// 'Developer | Person' 형식에 'skill' 속성이 없습니다.
// 'Person' 형식에 'skill' 속성이 없습니다.
// union 타입으로 반환된 객체는 Developer나, Person에 대한 공통 속성만 접근할 수 있음.
console.log(jeon.skill);
// 타입 단언을 통한 해결방법
if((jeon as Developer).skill) {
    const skill = (jeon as Developer).skill;
    console.log(skill);
} else if((jeon as Person).age) {
    const age = (jeon as Person).age;
    console.log(age);
}

//타입 가드 정의
const isDeveloper = (target: Developer | Person): target is Developer => {
    return (target as Developer).skill !== undefined;
}
//developer 일 때
if(isDeveloper(jeon)) {
    console.log(jeon.skill);
} else { //person 일 때
    console.log(jeon.age);
}