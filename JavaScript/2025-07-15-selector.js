// id로 태그 선택하기
const myTag1 = document.getElementById('myNumber');
console.log(myTag1);

const myTag2 = document.getElementById('btns');
console.log(myTag2);

const myTag3 = document.getElementById('codeit');
console.log(myTag3);

// class로 태그 선택하기
const myTags1 = document.getElementsByClassName('color-btn');
console.log(myTags1);
console.log(myTags1[1]);
console.log(myTags1.length);

for (let tag of myTags1) {
	console.log(tag);
}

const myTags2 = document.getElementsByClassName('red');
console.log(myTags2);
console.log(myTags2[0]);

const myTags3 = document.getElementsByClassName('white');
console.log(myTags3);
console.log(myTags3 === null);
console.log(myTags3.length);