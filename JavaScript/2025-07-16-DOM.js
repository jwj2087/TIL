//window : 전역객체 (Global Object)
// 일반적으로 사용하는 모든 내장객체, 내장함수는 모두 window 객체 안에 있다. 
window.console.log(window);
// 그래서 window를 생략하고 사용 가능.

// DOM (Document Object Model)
// HTML 문서를 전체를 객체로 표현한 것. document 객체가 최상단 객체가 된다. 
console.log(document); // log : 파라미터로 전달한 값을 출력
console.dir(document); // dir : 객체의 속성을 출력

// HTML이 계층 구조를 이루고 있는 만큼 DOM도 트리 형태로 구성된다.
// 각 객체를 node라고 부르며 부모노드, 자식노드, 형제노드 간의 관계로 이루어진다. 
// 태그를 표현하는 노드 : 요소 노드 (Element node)
// 문자를 표현하는 노드 : 텍스트 노드(Texxt node), 자식노드를 가질 수 없어서 leaf node라고도 한다.


const mytag = document.querySelector('#list1');

// 부모 요소 노드
console.log(mytag.parentElement);

// 형제 요소 노드
console.log(mytag.previousElementSibling); 
console.log(mytag.nextElementSibling); 

// 자식 요소 노드
console.log(mytag.children[1]);
console.log(mytag.firstElementChild);
console.log(mytag.lastElementChild);

// 연결해서 사용도 가능
console.log(mytag.parentElement.previousElementSibling);

// 모든 노드에 대한 프로퍼티(공백, 줄바꿈, 주석 등 모두 포함)
console.log(mytag.childNodes);
console.log(mytag.firstChild);
console.log(mytag.lastChild);
console.log(mytag.parentNode);
console.log(mytag.previousSibling);
console.log(mytag.nextSibling);
// 정말 모든 노드를 나타내기 때문에 잘 사용하지 않는다. 정말 필요할 때만 사용!


// HTML 수정 : 잘 사용 하지 않는 방식
console.log(mytag.innerHTML); // 요소 내부 html 코드를 문자열로 반환
// mytag.innerHTML = '<li>변경-innerHTML</li>' 

console.log(mytag.outerHTML); // 요소 노드를 포함해 전체 html을 문자열로 반환
// mytag.outerHTML = '<ul id="new-list"><li>변경-outerHTML</li></ul>'

console.log(mytag.textContent); // 요소 안의 내용들 중 태그를 제외하고 텍스트만 반환
// mytag.textContent = 'new text!';

/* 3가지 모두 요소 내용을 반환하고 변경할 수 있으나 내용이 아예 교체가 됨으로 사용에 유의해야한다.
    그리고 이렇게 js에서 직접적으로 html을 손대는게 좋은 것도 아님. */


// 요소 노드 추가하기
// 1. 새로운 요소 노드 만들기
const first = document.createElement('li');

// 2. 요소 노드 내용 채우기
first.textContent = '처음';

// 3. 요소 노드 추가하기 : prepend, append, after, before
mytag.prepend(first); // 맨 처음 자식 노드
mytag.append("문자열도 가능"); // 마지막 자식 노드
mytag.before(first); // 이전 형제 노드
mytag.after(first); // 이후 형제 노드

// 노드 삭제
const mvTag = document.querySelector('#list2');
// mytag.remove(); 
mytag.children[0].remove();

// 노드 이동
mytag.append(mvTag.children[3]);
mvTag.children[2].after(mytag.children[1]);


// HTML 표준 속성들은 요소 노드의 프로퍼티가 된다
// id 속성
console.log(mvTag.id);

// class 속성
console.log(mvTag.className);

// href 속성
const link = mvTag.lastElementChild;
console.log(link.href);

// 모든 속성에 접근하는 방법
// elem.getAttribute('속성'): 속성에 접근하기
console.log(mvTag.getAttribute('href'));
console.log(mvTag.getAttribute('class'));

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기
mvTag.setAttribute('class', 'list'); // 추가
link.setAttribute('href', 'https://www.codeit.kr'); // 수정

// elem.removeAttribute('속성'): 속성 제거하기
mvTag.removeAttribute('href'); 
mvTag.removeAttribute('class'); 


// 스타일 다루기
// 직접적으로 HTML에 style 입히기 (권장 x)
mvTag.children[0].style.textDecoration = 'line-through'; // 카멜표기법 사용

// 태그에 클래스를 변경하는 방식으로 style을 입히기

// elem.className : 이 경우에는 기존의 클래스가 사라지고 done 클래스만 남는다
mvTag.children[1].className = 'done';

// elem.classList : add, remove, toggle 사용 가능, 클래스를 유사배열로 접근 가능
const item = mvTag.children[2];
item.classList.add('done', 'etc'); // 여러개의 클래스도 줄 수 있다
item.classList.remove('done');
item.classList.toggle('done', true); // true/false를 넣으면 기능을 강제할 수 있다. 


// 안전한 비표준 속성 사용 방법 dataset
/* 

<button class="btn" data-status="대기중">대기중</button> 

data-로 속성을 작성하면 이 속성들이 dataset이라는 프로퍼티에 저장이된다.
element.dataset.status에 접근하면 "대기중"이라는 해당값을 반환한다.

*/

