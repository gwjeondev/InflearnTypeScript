//타입호환 인터페이스 예제
interface Developer {
  name: string;
  skill: string;
}

interface Teacher {
  name: string;
}

let developer: Developer;
let teacher: Teacher;
//구조적으로 teacher보다 developer가 가지고 있는 속성수가 더 많고 더 큼. 따라서 아래 호환 불가
//developer에는 skill이라는 속성이 존재하지만 teacher에는 존재하지 않음
//developer = teacher;

//아래 문법은 가능함.
//developer에는 skill 속성이 있지만, teacher에는 skill 속성이 없으므로 무시됨.
teacher = developer;


