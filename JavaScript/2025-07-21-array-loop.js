// 배열의 메소드
// forEach
// 배열의 요소를 하나씩 살펴보면서 반복작업을 하는 매소드
// 첫번째 파라미터: 요소를 받을 변수 역할(필수)
// 두번째 파라미터: 요소의 index
// 세번째 파라미터: 메소드를 호출한 배열 (배열 자체에 메소드를 사용하게 되면 활용하는 방법)
members.forEach((member, index, arr) => { // arrow function
  console.log(`${index} ${member}님이 입장하셨습니다.`);
  console.log(arr);
});

// map
// forEach와 거의 동일하나 첫 번째 아규먼트로 전달하는 콜백함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴
const numbers = [1, 2, 3, 4];
// 변수에 담아서 활용 가능
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});
console.log(twiceNumbers); // (4) [2, 4, 6, 8]

// forEach는 단순 반복작업일때, map은 반복작업의 결과값을 활용해야할때 유용
// 둘 다 횟수는 처음 호출할때의 배열의 길이이므로 콜백함수로 요소를 추가해도 무한루프에 빠지지 않고 호출했던 배열의 길이만큼만 실행되고 종료한다.
// 그러나 배열의 길이가 줄어드는 경우는 반복횟수도 줄어든다.



// reduce
// 누적값을 계산할 때 활용하는 메소드
// accumulator(누산기) : 직전에 동작한 콜백함수가 리턴한 값 할당
const initialAccValue = 0;

const sumAll = numbers.reduce((accumulator, element, index, array) => {
  console.log(`${index}번 index 요소로 동작`);
  console.log('acc: ',accumulator);
  console.log('el: ', element);
  console.log('--------');
  return accumulator + element;
}, initialAccValue); // initialAccValue : acc가 전달받을 초기값
// 초기값을 생략하면 배열을 [0] 값이 전달됨
// 그렇게 되면 콜백함수가 [1]부터 시작되므로 초기값을 명시해주는 것이 권장된다

console.log(sumAll); // 10 (1+2+3+4)
