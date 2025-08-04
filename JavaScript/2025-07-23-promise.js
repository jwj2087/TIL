// 콜백의 한게점
// 여러 비동기 작업들을 연속적으로 처리할때, 콜백안에 콜백을 중첩시키게 된다: 콜백 헬(Callback Hell)
// 콜백 헬로 인해서 코드를 이해하기도 어렵고 디버깅이나 테스트도 어려워진다. 그래서 나온 것이 Promise 다.

// Promise
// 비동기 작업이 완료되면 값을 알려주는 객체
// 일단 Promise를 돌려주고 나중에 작업이 완료되면 결과값을 Promise에 채워 넣어줌
// 장점 : 비동기 작업을 처리할 때도 익숙한 형태로 코드를 작성할 수 있다

// Promise의 세가지 상태
// Pending: 비동기 작업이 끝나기를 기다릴 때
// Fulfilled: 비동기 작업이 성공적으로 끝났을 때. 비동기 작업의 성공 결과를 결괏값으로 갖게 됨.
// Rejected: 비동기 작업이 실패했을 때. 비동기 작업에서 발생한 오류를 결괏값으로 갖게 됨.

// fetch()
// Promise 객체를 반환하는 함수
const response = fetch('https://learn.codeit.kr/api/employees');
console.log(response); // Promise { <pending> }


// await 문법
// Promise객체를 바로 할당되는 것이 아니라 fetch의 작업이 완료되고 결과값을 받아오는 문법
// 결과값을 받아올려면 await을 사용해야한다
const await_response = await fetch('https://learn.codeit.kr/api/employees');
const data = await await_response.json(); // json 메소드로 리스폰스를 파싱
// json 메소드도 시간이 오래 걸리기에 await을 써주면 결과값을 받을 수 있다.
console.log(data);

// Promise 객체 앞에 await 키워드를 쓰면 Promiseted가 될 때까지 기다린다. 
// Fulfilled가 되면 Promise 객체의 결괏값을 리턴
// Rejected가 되면 Promise 객체의 결괏값(오류)을 throw

// 그냥 바로 await를 사용해서 code를 작성하면 비동기적으로 코드 실행이 안된다. await를 기다렸다가 실행하고 다음 코드를 진행하게 됨
// 그래서 async 함수를 사용한다
import { printEmployees, getEmployee } from "./2025-07-23-asyncFunction.js";
// async는 Promise의 상태가 Fulfilled 상태가 될때까지 기다리는 동안 함수 바깥으로 나가서 다음 코드를 실행해준다
try {

    printEmployees();
    console.log('Task 2');
    console.log('Task 3');


    // 효율적인 비동기 코드
    // await은 fulfilled가 될때까지 함수 밖으로 나간다는 특징이 있다. 그래서 내부에서 반복문을 돌리면 비효율적인 코드가 될 수 있으므로
    // 외부에서 반복문을 만들어 함수를 호출하는 방식이 효율적인 방법이다.
    // 이러면 반복문마다 비동기 작업을 호출하고 기다리는 동안 함수를 빠져나와서 다음 비동기 작업을 호출하게 된다.
    // 그렇게 모두 호출하고 fulfilled 상태가 되면 리스폰스를 받아오므로 순서는 뒤죽박죽일 수 있다.
    for (let i = 1; i < 10; i++) {
        getEmployee(i); // 이렇게 새로 호출하는 방식이 속도가 빠르다
    }

    const employee = await getEmployee(1); // async 함수는 무조건 Promise 객체를 반환하므로 await을 써줘야한다
    console.log(employee);


    // then 
    // await보다 간결하게 코드를 작성할 수 있다
    function getRandomElement(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length);
        return arr[randomIdx];
    }
    console.log('메뉴 고르는 중...');

    // const response = await fetch('https://learn.codeit.kr/api/menus');
    // const menus = await response.json();
    // const randomMenu = getRandomElement(menus);
    // console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);

    fetch('https://learn.codeit.kr/api/menus')
        .then((response) => response.json())
        .then((menus) => getRandomElement(menus))
        .then((randomMenu) => console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`))
        // 프로미스 체인(Promise Chain) : then 메소드를 이용해서 이렇게 코드를 이어 작성하는 방식
        .catch((e) => console.log('프로그램이 고장났습니다 :('))
        .finally(() => console.log('프로그램이 끝났습니다.'))
    // 프로미스 체인에 cathch와 finally를 넣어서 오류를 관리할 수 있다


    // Promise.all()
    // const p = Promise.all([p1, p2, p3, ...]);
    // 여러 Promise를 동시에 기다릴 때 사용한다의 상태가 fulfilled 또는 rejec
} catch (e) {
    console.log('error!!');
    console.log(e);
}