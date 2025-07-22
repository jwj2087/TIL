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

const { mactitle, macprice, color = 'silver' } = macbook_pro;

console.log(mactitle);
console.log(macprice);
console.log(color);

// 객체의 프로퍼티와 동일한 이름의 변수를 이용하면 객체에서 바로 해당 프로퍼티의 값을 할당받을 수 있다.
// 없는 프로퍼티 네임을 이용하면 undefined가 할당된다
// 할당연산자를 통해 기본값도 지정할 수 있다.

const { storage, ...rest } = macbook_pro;
// ...를 이용하면 프로퍼티가 유효한 부분은 해당 변수에 할당하고
// 나머지를 하나의 객체로 모아서 할당할 수도 있다.

const { mactitle: product_name } = macbook_pro;
console.log(product_name);
// 프로퍼티: 변수명을 이용해서 할당받는 변수의 이름을 프로퍼티와 다르게 설정할 수도 있다.

const propertyName = 'mactitle';
const { [propertyName]: product_name1 } = macbook_pro;
// 계산된 속성명(computed property name)를 이용하면 변수를 이용해 프로퍼티 네임을 사용할 수도 있다.


// 구조분해 예시코드
// title, artist, year, medium 변수에 myBestArt 객체의 각 프로퍼티를 할당
const myBestArt = {
  title: '별이 빛나는 밤에',
  artist: '빈센트 반 고흐',
  year: 1889,
  medium: '유화',
};
const { title, artist, year, medium } = myBestArt;

// myBestSong의 프로퍼티 중 title과 artist는 각각 songName과 singer라는 변수에, 나머지는 rest라는 변수에 객체로 할당
const myBestSong = {
  title: '무릎',
  artist: '아이유(IU)',
  release: '2015.10.23.',
  lyrics: '모두 잠드는 밤에...'
};
const { title: songName, artist: singer, ...rests } = myBestSong;

// 구조분해를 이용해서 내용을 출혁하는 함수
const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };
function printMenu(menu) {
  //  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true
  const { name, ice = 'true' } = { ...menu };
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


// 구조분해 이용법
// 함수의 파라퍼티에 바로 구조분해를 이용해서 아규먼트들을 받아올 수도 있다.
function getArray() {
  return ['unatural', 'miu404', 'lastmile'];
}
const [el1, el2, el3] = getArray(); // 함수의 return 값이 배열일때 구조분해를 이용해서 바로 변수를 받아올 수 있다.
console.log(el1); // unatural
console.log(el2); // miu404
console.log(el3); // lastmile

// function printOSTRank(...arg){
//   const [r1, r2, r3, ...etc] = arg;
function printOSTRank([r1, r2, r3, ...etc]) { // 구조분해를 이용해 파라미터에 바로 배열들의 값을 전달받을 수 있다.
  console.log('랭킹 결과를 알려드립니다');
  console.log(`1위는 ${r1}`);
  console.log(`2위는 ${r2}`);
  console.log(`3위는 ${r3}`);
  console.log("이외에도");
  for( let ost of etc){
    console.log(`${etc} `);
  }
}

printOSTRank('lemon', 'kanden', 'kickback', 'sunny', 'etc');

const ostList = ['lemon', 'kanden', 'kickback', 'sunny', 'etc'];
printOSTRank(ostList);


// 객체에 접근하는 함수를 만들 때, 구조분해를 활용하면 좀 더 간결하게 함수를 작성할 수 있다.
const ostInfo = {
  title: 'Kanden',
  drama: 'miu404',
  artist: 'Kenshi Yonezu',
  date: 2020,
};
function printOst( {title, drama, artist} ){ // 구조분해를 이용하면 이렇게 한번에 객체의 프로퍼티를 파라미터에 가져와 사용할 수 있다.
  console.log(`제목은 ${title}`);
  console.log(`드라마 제목은 ${drama}`);
  console.log(`가수는 ${artist}입니다`);
};
printOst(ostInfo);

// 이벤트 객체를 활용할 때도 target 프로퍼티만 활용한다면 간단하게 작성할 수 있다.
const btn = document.querySelector('.btn_color');

btn.addEventListener('click', ( {target} ) => {
  target.classList.toggle('done');
});

// 중첩 객체 구조 분해 ( Nested Object Destructuring )
btn.addEventListener('click', ( {target: {classList}} ) => { 
  // 위의 경우에서 한번 더 구조분해를 한 경우. 가독성이 떨어질 수 있기때문에 자주 사용하지는 않는다.
  classList.toggle('done');
});
 