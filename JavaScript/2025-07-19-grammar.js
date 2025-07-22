// 조건 연산자 = 삼항 연산자
// 조건 ? truty : falsy; 
const CUT_OFF = 80;
function passChecker(score) {

  if (score > CUT_OFF) {
    return '합격';
  } else {
    return '불합격';
  }

  // return score > CUT_OFF ? "합격!" : "불합격";
  // if문보다 간결하지만 반복문이나 조건에 다른 변수 선언 등은 불가능. 모든 if문 대체 x
}
console.log(passChecker(75));

// Spread Syntax(ES2015)
const numbers = [1, 2, 3];
// spread 구문은 하나로 묶여있는 값을 각각의 개별값으로 펼치는 방식
console.log(...numbers);
console.log(1, 2, 3); // 동일한 결과가 나옴

// rest parameter와 유사하지만 이 경우 여러개의 argument를 하나의 파라미터로 묶는 방식
const sumAll = (...args) => {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));

// 배열 복사
const webPublishing = ['HTMl', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript']
console.log(webPublishing);
console.log(interactiveWeb);
/*
interactiveWeb = webPublishing; 으로 사용하면 배열 내용을 복사하는 것이 아니라 주소값을 넣는 것이라
interactiveWeb[]을 변경해도 webPublising[]도 변경된다.

그래서 
const interactiveWeb = webPublishing.slice();
방식으로 배열 함수를 사용하는데 spread 구문을 이용하면 직관적으로 배열의 내용을 복사할 수 있다.

spread 구문은 하나의 값으로 취급되지 않고 여러값들의 목록으로 취급된다. 
*/

const members = ['태호', '종훈', '우재'];
const newObject = { ...members };
console.log(newObject);
// Spread 구문을 이용해서 객체를 생성하면 배열의 인덱스가 프로퍼티 네임이 되어서 객체가 생성된다.

// ES2018 이후로는 일반 객체에도 spread구문을 사용할 수 있다. 
const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte, // 객체 선언 안에서 Spraed 구문을 사용하면 객체를 복사할 수 있다.
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

// 배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만,
// 객체로는 새로운 배열을 만들거나 함수의 아규먼트로 사용할 수는 없다.


// 모던한 프로퍼티 표기법 - 간략화해서 프로퍼티들을 표현하는 방법들
const user = { // 일반적인 객체 문법
  title: 'Hey',
  date: 2017,
  job: '편집자',
};

// 변수에 할당해서 객체를 생성할 때 
const name = 'Codeit';
const birth = 2020;
const content = '프로그래밍';
const education = { // 프로퍼티 네임과 변수명이 같다면 하나만 작성해서 객체를 생성 가능
  name,
  birth,
  content,
};
// 위와 같이 함수도 축약형 표기가 가능하다

const book = {
  title: '군주론',
  date: 2017,
  getFullContetn() { // 객체 내부에서 매소드를 선언할 때 :function을 생략 가능
    return `${this.title} ${this.date}`;
  },
};

// 계산된 속성명(computed property name)
const sprint = {
  ['Code' + 'it']: 'value',
  // []에 변수에 담긴 값을 사용하거나 함수의 return값을 사용할 수 있다
};
console.log(sprint) // {Codeit: "value"}

// Optional Chaning (ECMAScript2020)
function printCatName(user) {
  console.log(user.cat.name);
}
const user1 = { // 객체에 해당 프로퍼티가 있는 경우 : 에러 x
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}
printCatName(user1); // Crew

// 중첩된 객체의 프로퍼티를 다룰 경우 user.cat.name에 접근하기 전에
// user.cat이 null 혹은 undefined가 아니라는 것을 검증해야 에러를 방지할 수 있다
const user2 = { // 객체에 해당 프로퍼티가 없는 경우 : 에러 발생
  name: 'Young',
}
console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined

function printCatName(user) {
  console.log(user.cat?.name); // 옵셔널 체이닝 연산자(?.) 사용
  // ?. 연산자 왼편의 프로퍼티가 null이나 undefined가 아니라면 그다음 프로퍼티값을 반환
  // 그렇지 않은 경우엔 undefined를 반환
}