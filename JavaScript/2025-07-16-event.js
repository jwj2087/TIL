// 이벤트 핸들러 등록하기
let btn = document.querySelector('#decrease');
btn.onclick = function(){
    console.log('hi!');
};
// 이 방식의 문제점 : 여러개의 event handler 불가.

// 그래서 사용하는 가장 권장되는 방법
// elem.addEventListner(event, handler)
function event1(){
    console.log('Hi, event1');
}

function event2(){
    console.log('hi, evnet2');
}

let increase = document.querySelector('#increase');
// 이벤트 핸들러 등록
// handler 부분에 함수형태로 쓰면 그냥 함수가 호출됨으로 핸들러 등록이 안된다
increase.addEventListener('click', event1);
increase.addEventListener('click', event2);

// 이벤트 핸들러 제거
increase.removeEventListener('click',event1);


// 이벤트 객체
function printEventObject(e){
    console.log(e);
}
/*
이벤트가 발생하면 그 이벤트 정보를 담고있는 이벤트 객체가 자동으로 생성된다. 
그리고 이벤트 핸들러가 되는 함수의 첫번째 파라미터로 항상 이벤트 객체가 전달된다. 

가장 많이 사용되는 이벤트 객체 프로퍼티
type : 이벤트가 발생한 타입(이름)
target : 이벤트가 발생한 요소
currentTarget : 이벤트 핸들러가 등록된 요소
timeStamp : 이벤트 발생 시각
bubbles : 버블링 단계인지 판단하는 값

그 외에도 키보드, 마우스 이벤트 등 각각 다양한 프로퍼티들을 가진다.
*/


// 이벤트 버블링
/* 
이벤트는 전파가 가능하다. 어떤 요소에서 이벤트가 발생하면 해당 요소에 등록된 이벤트 핸들러가 동작할 뿐 아니라
부모요소로 이벤트가 계속해서 전파되면서 각 요소에도 등록된 이벤트 핸들러가 있다면 차례로 모든 이벤트 핸들러가 작동한다.
자식 요소에서 부모 요소로 이벤트가 전파되는 것을 이벤트 버블링(Event Bubbling)이라 한다.
( 반대 방향으로 이벤트가 전파되는 것을 캡쳐링이라고 한다. 캡처링->타깃->버블링 순서로 이벤트 전파)

target 프로퍼티는 처음 이벤트 핸들러를 등록한 시점만을 담고 있다.(버블링되면서 변경 x)
currentTarget 프로퍼티의 경우 실제 이벤트가 발생한 곳을 가리킨다. (버블링되었다면 실제 이벤트가 발생한 요소를 반환)

stopPropagation 메소드로 전파를 막을 수 있다. (권장x)
*/

// 이벤트 위임
const btn_event = document.querySelector('#btn-list');

btn_event.addEventListener('click', function(e){
    // 그냥 이벤트를 주면 부모요소에서도 이벤트가 발생하므로 정확하게 이벤트를 위임할 필요가 있다
    if(e.target.classList.contains('color-btn')){ 
        e.target.classList.toggle('color-change');
    }
});
/*
버블링 개념을 활용하면 자식 요소에 각각 이벤트 핸들러를 등록하지 않고 부모 요소에 등록해서 한번에 이벤트를 관리할 수 있다.
이렇게 이벤트를 다루는 방식을 이벤트 위임(Event Delegation)이라고 한다.
이벤트 위임 방식이 코드도 적고 프로그램 성능에도 유용하므로 개별적으로 이벤트 위임을 시키는 것보다 우선적으로 고려

그래서 이벤트 버블링을 막는것은 피하는 것이 좋다
*/

// preventDefault : 브라우저의 기본 동작을 막는 매소드