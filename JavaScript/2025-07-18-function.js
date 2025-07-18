fun('hello'); // 함수 선언 방식은 호이스팅 가능
// 함수 선언
function fun(hi) {
    console.log(hi);
};

// 함수 표현식 : 함수 선언을 값처럼 활용
const printHI = function () {
    console.log('HI');
};

// 함수 선언은 블록 스코프를 가지지 않지만 함수 표현식은 할당된 변수에 따라 스코프가 결정됨
// 권장하는 방식은 다들 의견이 다름, 그러나 함수 선언이 보편적으로 사용됨

// 기명 함수 표현식 : 함수 표현식에서 함수에 이름을 붙이는 것
const sayHi = function printHiConsole() {
    console.log('hi');
};
// 이 이름은 함수 내부에서 함수를 가리킬 대 사용할 수 있고 외부에서 함수를 호출할때 사용 불가
printHiConsole(); //ReferenceError 발생
// 외부 호출이 불가능 => 내부에서 호출할 때 사용 => 재귀함수다
// 재귀함수를 만들고 해당 함수를 다른 변수에 넣을때 변수명이 바뀌면서 함수명도 바뀌어 생기는 오류를 방지하기 위함
let countdown = function printCountdown(n) {
    console.log(n);
    if (n === 0) {
        console.log('End!');
    } else {
        printCountdown(n - 1);
    }
};
let myFunction = countdown;
countdown = null;
myFunction(5); // 정상적으로 동작


// 즉시 실행 함수 ( Immediately Invoked Function Expression, 줄여서 IIFE )
// 즉시 실행 함수는 이름을 붙여도 외부 호출 불가, 재귀적으로는 사용 가능
(function (x, y) {
    console.log(x + y);
})(3, 5);

// 선언과 동시에 실행되기 때문에 초기화에 주로 활용 or 재사용이 필요없는 일회성 동작
(function init() {
    // 프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();


// 함수 값으로 활용하기

// 객체 안에 매소드로 사용
const myObject = {
    brand: 'Codeit',
    bornYear: 2017,
    isVeryNice: true,
    sayHi: function (name) {
        console.log(`Hi! ${name}`);
    }
};
myObject.sayHi('JavascScript');

// 배열 안에서 함수
const myArray = [
    'codeit',
    2017,
    true,
    function (name) {
        console.log(`Hi! ${name}`);
    },
];
myArray[3]('Codeit');

// 다른 함수의 파라미터로 활용 = 콜백함수
function makeQuiz(quiz, answer, success, fail) {
    if (prompt(quiz) === answer) {
        console.log(success());
    } else {
        console.log(fail());
    }
};

function getSuccess() { // 콜백함수
    return '정답';
};
function getFail() { // 콜백함수
    return '오답!';
};

const question = '5 + 3 = ?';
makeQuiz(question, '8', getSuccess, getFail);


// 함수를 리턴값으로 활용 = 고차함수
function getPrintHey() {
    return function () {
        console.log('Hey!?');
    };
};
const sayHey = getPrintHey(); // 고차함수를 변수에 할당
sayHey();
getPrintHey()(); // 고차함수 바로 호출하는 법


// Parameter : 함수에 변수로 사용 function fun(parameter) { ... };
// Argument : 파라미터로 전달하는 값 fun('Argument');

// 파라미터 초기값 (ES2015부터)
function printName(name = 'HelloWorld!', interest) {
    console.log(`${name}`);
    console.log(`${name}`);
}
printName(undefined, 'code'); // argument가 undefined면 초기값이 동작한다.
// 그리고 순서대로 파라미터에 할당되니 초기값이 필요한 파라미터를 나중에 적는것이 좋다. 

function defaultTest(x, y = x + 3) {
    console.log(`${x}, ${y}`);
}

defaultTest(2) // 2 , 5
defaultTest(2, 3) // 2 , 3


// argument 
// 함수에 전달되는 모든 argument는 유사배열로 전달되고 이를 함수 내부에서 "arguments"라는 객체로 이용할 수 있다.
// 함수에 전달된 argument들을 유연하게 사용하는데 이용한다
function firstWords() {
    let word = '';
    for (let arg of arguments) { // arguments 객체를 이용
        word = word + arg[0];
    }
    console.log(word);
}
firstWords('나만', '없어', '고양이');
firstWords('아니', '바나나말고', '라면먹어');
firstWords('만두', '반으로', '잘라먹네', '부지런하다');
firstWords('결국', '자바스크립트가', '해피한', '지름길');
firstWords('빨간색', '주황색', '노란색', '초록색', '파란색', '남색', '보라색');

// Rest Parameter (ES2015부터) < arguments 객체보다는 Rest Parameter를 사용하는 것이 권장
function restParm(...args) {
    console.log(args.splice(0, 2)); // Rest Parameter 문법을 사용하면 배열 함수 사용이 가능해진다
    console.log(arguments.splice(0, 2)); // 유사 배열이라 배열 함수 사용 불가
}
// 아규먼트가 먼저 할당되고 나머지들을 배열로 묶는 역할을 하므로 일반 파라미터와 사용할때는 꼭 마지막에 작성해야한다
function restParmArgs(first, second, ...outhers) {
    console.log(`1 : ${first}`);
    console.log(`2 : ${second}`);
    for (const arg of outhers) {
        console.log(`나머지 : ${outhers}`);
    }
}


// Arrow Function : 이름이 없는 함수에 사용
const getTwice = (num) => {
    return num * 2;
};
const getTwice2 = num => num * 2; // 간결한 표현법
// 파라미터가 하나일 때 () 생략가능, return문 하나라면 return이랑 {} 생략가능

const btn = document.querySelector('#btn-list');
btn.addEventListener('click', () => {
    console.log('btn clicked!');
});
// Arrow Function은 Argument 객체가 존재하지 않는다


// this
// 함수를 호출한 객체를 가리킨다 기본일때는 가장 상위 객체인 window를 가리킨다
// Arrow Function에서는 호출한 대상이 아니라 function 선언 직전에 가장 유효한 this값을 가리킨다
function getFullName() {
    return `${this.firstName} ${this.lastName}`;
};

const user = {
    firstName: 'Hey',
    lastName: 'Lock',
    getFullName: getFullName,
};
const admin = {
    firstName: 'Hi',
    lastName: 'Alin',
    getFullName: getFullName,
};

console.log(user.getFullName());
console.log(admin.getFullName());
