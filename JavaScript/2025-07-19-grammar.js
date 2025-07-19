// 조건 연산자 = 삼항 연산자
// 조건 ? truty : falsy; 
const CUT_OFF = 80;
function passChecker(score){

    if(score > CUT_OFF){
        return '합격';
    } else {
        return '불합격';
    }

    // return score > CUT_OFF ? "합격!" : "불합격";
    // if문보다 간결하지만 반복문이나 조건에 다른 변수 선언 등은 불가능. 모든 if문 대체 x
}
console.log(passChecker(75));

// Spread Syntax(ES2015)
const numbers = [1, 2, 3];
// spread 구문은 하나로 묶여있는 값을 각각의 개별값으로 펼치는 방식
console.log(...numbers); 
console.log(1, 2, 3); // 동일한 결과가 나옴

// rest parameter와 유사하지만 이 경우 여러개의 argument를 하나의 파라미터로 묶는 방식
const sumAll = (...args) => {
    let sum = 0;
    for(arg of args){
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));

// 배열 복사
const webPublishing = ['HTMl', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript']
console.log(webPublishing);
console.log(interactiveWeb);
/*
interactiveWeb = webPublishing; 으로 사용하면 배열 내용을 복사하는 것이 아니라 주소값을 넣는 것이라
interactiveWeb[]을 변경해도 webPublising[]도 변경된다.

그래서 
const interactiveWeb = webPublishing.slice();
방식으로 배열 함수를 사용하는데 spread 구문을 이용하면 직관적으로 배열의 내용을 복사할 수 있다.

spread 구문은 하나의 값으로 취급되지 않고 여러값들의 목록으로 취급된다. 
*/

const members = ['태호', '종훈', '우재'];
const newObject = {...members};
console.log(newObject);
// Spread 구문을 이용해서 객체를 생성하면 배열의 인덱스가 프로퍼티 네임이 되어서 객체가 생성된다.

// ES2018 이후로는 일반 객체에도 spread구문을 사용할 수 있다. 
const latte = {
  esspresso: '30ml',
  milk: '150ml'
};

const cafeMocha = {
  ...latte, // 객체 선언 안에서 Spraed 구문을 사용하면 객체를 복사할 수 있다.
  chocolate: '20ml',
}

console.log(latte); // {esspresso: "30ml", milk: "150ml"}
console.log(cafeMocha); // {esspresso: "30ml", milk: "150ml", chocolate: "20ml"}

// 배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만,
// 객체로는 새로운 배열을 만들거나 함수의 아규먼트로 사용할 수는 없다.


// 모던한 프로퍼티 표기법 - 간략화해서 프로퍼티들을 표현하는 방법들
const user = { // 일반적인 객체 문법
    title: 'Hey',
    date: 2017,
    job: '편집자',
};

// 변수에 할당해서 객체를 생성할 때 
const name = 'Codeit';
const birth = 2020;
const content = '프로그래밍';
const education = { // 프로퍼티 네임과 변수명이 같다면 하나만 작성해서 객체를 생성 가능
    name,
    birth,
    content,
};
// 위와 같이 함수도 축약형 표기가 가능하다

const book = {
    title: '군주론',
    date: 2017,
    getFullContetn(){ // 객체 내부에서 매소드를 선언할 때 :function을 생략 가능
        return `${this.title} ${this.date}`;
    },
};

// 계산된 속성명(computed property name)
const sprint = {
    ['Code'+'it']: 'value',
    // []에 변수에 담긴 값을 사용하거나 함수의 return값을 사용할 수 있다
};
console.log(sprint) // {Codeit: "value"}

// Optional Chaning (ECMAScript2020)
function printCatName(user) {
  console.log(user.cat.name);
}
const user1 = { // 객체에 해당 프로퍼티가 있는 경우 : 에러 x
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  }
}
printCatName(user1); // Crew

// 중첩된 객체의 프로퍼티를 다룰 경우 user.cat.name에 접근하기 전에
// user.cat이 null 혹은 undefined가 아니라는 것을 검증해야 에러를 방지할 수 있다
const user2 = { // 객체에 해당 프로퍼티가 없는 경우 : 에러 발생
  name: 'Young',
}
console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined

function printCatName(user) {
  console.log(user.cat?.name); // 옵셔널 체이닝 연산자(?.) 사용
  // ?. 연산자 왼편의 프로퍼티가 null이나 undefined가 아니라면 그다음 프로퍼티값을 반환
  // 그렇지 않은 경우엔 undefined를 반환
}


// 구조 분해 (Destructuring)(ES2015)
// 배열이나 객체의 구조를 분해

// 배열 구조 분해
const rank = ['유나', '효준', '민환', '재하', '규식'];
const [macbook, ipad, airpods, coupon] = rank;

console.log(macbook); // 유나
console.log(ipad); // 효준
console.log(airpods); // 민환
console.log(coupon); // 재하

/*
배열의 내용을 변수에 할당할때 const [변수들] = 배열; 방식으로 변수에 순서대로 배열의 값을 할당할 수 있다.
const [변수들]에 할당되는 값이 배열이 아니거나 할당이 없으면 에러가 발생한다

변수와 배열의 길이가 같을 필요는 없다. 넘치는 요소는 변수에 할당되지 않을뿐이다
const [macbook, ipad, airpods, ...coupon] = rank;
마지막 변수를 ...변수 로 표현하면 ...arg처럼 배열의 순서대로 변수에 할당하고 나머지는 ...변수에 배열로 할당하는 게 가능하다.
*/

const [mac, pad, air, ...cp] = rank;
console.log(macbook); // 유나
console.log(ipad); // 효준
console.log(airpods); // 민환
console.log(coupon); // ["재하", "규식"]

// 할당하는 배열의 길이가 짧은 경우, 남은 변수에 undefined값이 할당된다. 
// 또는 coupon='없음'처럼 초기값을 설정할 수도 있다.

// !!변수의 내용을 교환할 때!!
const player1 = '진우';
const player2 = '루미';

// let temp = player1;
// player1 = player2;
// player2 = temp;

// 구조분해를 이용하면 이렇게 간단하게 변경 가능
[player1, player2] = [player2, player1]; 



// 객체 구조 분해
const macbook_pro = {
    mactitle: '맥북 프로 16형',
    macprice: 3690000,
    memory: '16GB',
    storage: '1TB SSD 저장장치',
    display: '16형 Rectina 디스플레이',
};

const {mactitle, macprice, color='silver'} = macbook_pro;

console.log(mactitle);
console.log(macprice);
console.log(color);

// 객체의 프로퍼티와 동일한 이름의 변수를 이용하면 객체에서 바로 해당 프로퍼티의 값을 할당받을 수 있다.
// 없는 프로퍼티 네임을 이용하면 undefined가 할당된다
// 할당연산자를 통해 기본값도 지정할 수 있다.

const {storage, ...rest} = macbook_pro;
// ...를 이용하면 프로퍼티가 유효한 부분은 해당 변수에 할당하고
// 나머지를 하나의 객체로 모아서 할당할 수도 있다.

const {mactitle: product_name} = macbook_pro;
console.log(product_name);
// 프로퍼티: 변수명을 이용해서 할당받는 변수의 이름을 프로퍼티와 다르게 설정할 수도 있다.

const propertyName = 'mactitle';
const { [propertyName]: product_name1 } = macbook_pro;
// 계산된 속성명(computed property name)를 이용하면 변수를 이용해 프로퍼티 네임을 사용할 수도 있다.


// 구조분해 에시코드
// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당해 주세요
const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};

const {title, artist, year, medium} = myBestArt;

// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당해 주세요
const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};

const {title: songName, artist: singer, ...rests} = myBestSong;

// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };

function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다
	const { name, ice='true' } = { ...menu };

	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}
// 테스트 코드
console.log(title);
console.log(artist);
console.log(year);
console.log(medium);
console.log(songName);
console.log(singer);
console.log(rests);
printMenu(menu1);
printMenu(menu2);
printMenu(menu3);