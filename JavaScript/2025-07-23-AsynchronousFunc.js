// 비동기 함수 (Asynchronous Function)
// 함수의 내용을 끝까지 쭉 실행하지 않고 중간에 다른 작업을 처리하다가 다시 돌아와서 마무리를 하는 함수

// 콜백을 이용하면 나중에 해야하는 작업을 함수형태로 전달 가능 -> 비동기 함수를 구현하는데 유용
console.log('1');
setTimeout( () => console.log('2'), 3000); // 비동기함수인 setTimeout에 콜백함수 ()=>console.log('2')를 전달
console.log('3'); // 1 3 2 순서로 실행된다

// !!비동기 함수는 이후에 있는 코드를 모두 실행하고 콜백을 실행함!!
console.log('1');

setTimeout(() => console.log('2'), 0);

console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');
/* 결과
1
3
4
5
6
7
8
9
10
2  - 딜레이로 0을 전달했지만 나머지 코드들이 모두 실행된 후에 실행되었다

하지만 대부분 비동기 함수 이후의 코드가 아무리 많아도 비동기 작업이 훨씬 오래 걸리고
몇 밀리초 단위까지 중요한 경우는 별로 없으므로 문제가 되는 경우는 거의 없다
*/
// 실행할 콜백이 여러개일 경우
console.log('1');

setTimeout(() => console.log('2'), 1001);
setTimeout(() => console.log('3'), 1000);

console.log('4');
/* 결과
1
4
3  
2
콜백이 여러개일 경우는 콜백은 동기적(순차적)으로 실행된다. 끝나는게 먼저 실행
*/

// 비동기 함수들

// setTimouout()
/* 
setTimeout(callback, delay, arg0, arg1, ...);
콜백함수명, 딜레이시간, 콜백에 줄 아규먼트 순서로 아규먼트를 넣어야한다. 

setTimeout() 이전에 있는 코드 실행
setTimeout() 함수 실행: delay 만큼 기다리는 타이머를 시작
setTimeout() 이후에 있는 코드 실행
delay가 지나면 callback 실행
*/


// setInterval() 
// 시간 간격을 두고 콜백을 반복적으로 실행하는 함수

console.log('Start');
// setInterval(callback, interval): interval 단위는 밀리초입니다.
const intervalID = setInterval(() => console.log('2초가 지났습니다'), 2000);

// clearInterval() 
// setInterval 해제 
setTimeout(() => clearInterval(intervalID), 7000); // 7초 후에 setInterval() 해제

console.log('End');


// DOM의 addEventListener()
// 웹 페이지 요소에 상호 작용이 있을 경우 실행할 함수를 등록
const btn = document.querySelector('.my-btn');

btn.addEventListener('click', () => console.log('button clicked!'));
// btn에 클릭('click') 이벤트가 발생할 시 () => console.log('button clicked!') 콜백이 실행
// btn.addEventListener() 아래에 있는 코드를 실행하다가 사용자가 btn 요소를 클릭하면 콜백이 실행돼서 'button clicked!'라고 콘솔에 출력


// React의 useEffect()
// React는 웹사이트 화면을 만드는 데 사용하는 라이브러리
// useEffect()함수는 컴포넌트가 모두 화면에 그려지는 시점에 콜백을 실행


// Express의 get()
// Express는 서버를 만들 때 사용
// app.get() 함수는 주소로 GET 리퀘스트가 들어오면 두 번째 아규먼트인 콜백을 실행 
// 콜백은 리스폰스를 보낸다.