// filter
// 배열의 요소를 하나씩 살펴보면서 콜백함수가 리턴하는 조건과 일치하는 요소만 모아서 새로운 배열을 리턴
const devices = [
    { name: 'GalaxyNote', brand: 'Samsung' },
    { name: 'MacbookPro', brand: 'Apple' },
    { name: 'Gram', brand: 'LG' },
    { name: 'SurfacePro', brand: 'Microsoft' },
    { name: 'ZenBook', brand: 'Asus' },
    { name: 'MacbookAir', brand: 'Apple' },
];
// filter 메소드는 무조건 배열을 반환한다
const apples = devices.filter((element, index, array) => {
    return element.brand === 'Apple'; // return문에 조건식 작성!!
});

console.log(apples); // (2) [{name: "MacbookPro", brand: "Apple"}, {name: "MacbookAir", brand: "Apple"}]
console.log(...apples); // spread 구문으로 펼치기

// find
// filter 메소드와 비슷하게 동작하지만, 콜백함수가 리턴하는 조건과 일치하는 가장 첫번째 요소를 리턴하고 반복을 종료하는 메소드
const myLaptop = devices.find((element, index, array) => {
    console.log(index); // 콘솔에는 0, 1, 2까지만 출력됨.
    return element.name === 'Gram';
});

console.log(myLaptop); // {name: "Gram", brand: "LG"}

// filter와 find는 비슷하지만 filter는 배열을 반환, find는 값을 반환
// 반복하는 회수의 차이. filter는 배열의 길이만큼, find는 하나만 찾으면 종료.
// 없는 조건을 찾으면 find는 undefined를 반환


// some
// 배열 안에 콜백함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드
const nums = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = nums.some((element, index, array) => {
    console.log(index); // 콘솔에는 0, 1, 2, 3까지만 출력됨.
    return element > 5;
});

console.log(someReturn); // true;

// every
// 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드 
// 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 true를 리턴, 
// 조건을 만족하지 않는 요소가 등장한다면 바로 false를 리턴하고 반복을 종료

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = nums.every((element, index, array) => {
    console.log(index); // 콘솔에는 0까지만 출력됨.
    return element > 5;
});

console.log(everyReturn); // false;