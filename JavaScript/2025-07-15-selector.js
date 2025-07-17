// id로 태그 선택하기
const getEleId = document.getElementById('myNumber');
console.log(getEleId);

// class로 태그 선택하기 : 유사배열 형태로 반환 HTMLCollection
const getEleClass = document.getElementsByClassName('color-btn');
console.log(getEleClass);
console.log(getEleClass[1]);
console.log(getEleClass.length);
for (let tag of getEleClass) {
	console.log(tag);
}

// css 선택자로 태그 선택하기
const querySelect = document.querySelector('.color-btn');
console.log(querySelect);
// All의 경우 NodeList로 반환
const querySelects = document.querySelectorAll('.color-btn');
console.log(querySelects);

/* 
getElement는 HTML 속성으로 태그를 선택하는 방식이고
querySelector는 css 선택자로 태그를 선택하는 방법이다.

결과값을 보면 getElementsBy--는 선택되는 태그가 여러개일 경우 유사배열로 값을 반환한다.(HTMLCollection)
querySelectAll의 경우는 해당하는 태그가 여러개여도 하나만을 반환한다.
여러개의 태그를 반환하기 위해서는 querySelectorAll을 사용해야한다. (NodeList)

유사배열 특징
1. 숫자 형태의 indexing이 가능하다.
2. length 프로퍼티가 있다.
3. 배열의 기본 매서드를 사용 가능하다.
4. Array.isArray(유사배열)의 리턴값은 false다.

사용성은 getElementsBy-- 보다 querySelector를 사용하는 것이 좋다.
HTML 태그를 선택하는 방식은 빠르지만 유연성이 낮고,
css 선택자를 선택하는 방법은 선택자를 그대로 쓸 수 있다는 장점과 대부분의 경우 getElementsBy--보다 예측가능하고 안전하게 동작한다.
*/