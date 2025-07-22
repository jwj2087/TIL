// sort
// 배열을 정렬하는 메소드
// 아무런 아규먼트도 전달하지 않으면 기본적인 유니코드에 정의된 문자열 순서를 따른다
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]

// 콜백함수로 아규먼트를 작성할 수 있다
// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]
// 주의점 : sort 메소드는 메소드를 실행하는 원본 배열을 정렬한다


// reverse 
// 배열의 순서를 뒤집어 주는 메소드
// 주의점 : 원본 배열의 요소들을 뒤집어 준다
letters.reverse();
numbers.reverse();

console.log(letters); // (5) ["A", "B", "E", "C", "D"]
console.log(numbers); // (5) [36000, 21, 4, 10, 1]
