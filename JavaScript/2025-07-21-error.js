// 에러와 에러 객체
/* 
특정 코드에서 에러가 발생하면 그 아래 코드는 더이상 실행되지 않는 문제가 발생
이러한 에러를 에러 객체를 이용해서 다룬다
javascript는 에러가 발생하면 자동으로 에러에 대한 정보가 담긴 에러 객체를 생성

에러 객체는 이름을 담고있는 name 프로퍼티와 
구체적인 내용을 담고 있는 message 프로퍼티가 존재
*/
// 에러 객체 예시
// SyntaxError : 잘못된 구문
// ReferenceError : 잘못된 참조
// TypeError : 변수나 매개변수가 유효한 자료형이 아님

// 에러 객체 생성
console.log('start');

const error = new TypeError('타입 에러가 발생했습니다.');
// 에러객체의 이름으로 원하는 메세지를 넣은 새로운 에러객체를 생성한다.

console.log(error.name); // TypeError
console.log(error.message); // 타입 에러가 발생했습니다.
// 이건 에러 객체를 생성한 것. 에러 발생 x

// 의도적으로 에러를 발생시키기
// throw error;
console.log('end!'); // 에러가 발생해서 실행되지 않음

// try catch문
try {
    console.log('에러 전');
    const hey = 'hey!';
    console.log(hey);

    hey = 'hello!'; // 에러 발생
    // 에러 발생 후 try문은 실행되지 않는다
    const language = 'js';
    console.log(language);
} catch (error) {
    console.log('에러 후');
    console.error(error); // 원래 보던 에러 메세지 형태로 출력
    console.log(error.name);
    console.log(error.message);
}
/*
예외 처리(Execption Handling)
try catch문을 활용하면 에러가 발생한 후 그 다음 실행이 멈추는 것을 방지하고
계속해서 다음 코드를 실행할 수 있다.
주의할 점 : try-catch문도 블록스코프이기에 블록스코프를 갖는 변수를 사용할때 스코프 범위를 주의해야한다.

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
  // finally문에서 에러 발생시 위의 catch문으로 돌아가진 x
  // 여기서도 예외처리를 하고 싶다면 try-catch문을 중첩해서 사용
}
*/