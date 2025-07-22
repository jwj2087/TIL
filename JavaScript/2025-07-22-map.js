// Map
// key-value로 이루어지며 key의 원래 삽입 순서를 기억하는 객체
// Map 생성
const codeit = new Map();

// set 메소드 - key를 이용해 value를 추가
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드 - key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드 - key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티 - 요소의 개수를 반환하는 프로퍼티
console.log(codeit.size); // 3

// delete 메소드 - key에 해당하는 값을 삭제하는 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드 - Map 안의 모든 요소를 제거하는 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0



// Set
// value값만 저장하며 중복을 허용하지 않는 Collection 
// Set 생성
const members = new Set();

// add 메소드 - 값을 추가하는 메소드
// 메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드 - Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티 - 요소의 개수를 반환하는 프로퍼티
console.log(members.size); // 4

// delete 메소드 - 값을 제거하는 메소드
// 메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드 - Set 안의 모든 요소를 제거하는 메소드
members.clear();
console.log(members.size); // 0

// 최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
// 배열의 중복값을 제거하는데 유용