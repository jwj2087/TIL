// GET
const res1 = await fetch('https://learn.codeit.kr/api/color-surveys');

console.log('Status Code: ');
console.log(res1.status); // 상태코드 
console.log('Headers: ');
console.log(res1.headers); // 헤더

const data = await res1.json();
console.log(data);
// count: 모든 데이터 갯수
// next: 다음 데이터를 받아오는 url
// previous: 이전 데이터를 받아오는 url
// results: 현재 페이지에 해당하는 데이터 배열

// 쿼리 파라미터: limit, offset
// offset: 데이터 몇개를 건너뛰고 요청할 것인지
// limit: 데이터 몇개를 요청할 것인지
// 주소 마지막에 id를 쓰면 해당 id 내용만 가져온다
const res2 = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10'); // 쿼리 스트링 직접 작성

const url = new URL('https://learn.codeit.kr/api/color-surveys'); //url 객체 생성
url.searchParams.append('offset', 10);
url.searchParams.append('limit', 10);
const res3 = await fetch(url); // url 객체 사용방법

// POST 
const avatarData = {
    hairType: 'short2',
    hairColor: 'black',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
};

const resPOST = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST', // PUT, PATCH, DELETE, HEAD 등 HTTP 요청 메서드
    body: JSON.stringify(avatarData), // post는 바디(내용)도 같이 전달해줘야함 -> json 문자열로 변환 필요
    headers: {
        'Content-Type': 'application/json',
    },
});
// 포스트로 전달하면 리스폰스로 생성된 데이터를 보내줌
const post_response = await resPOST.json(); // 그리고 리스폰스로 들어온 데이터는 json 형태
console.log(post_response);

// HTTP 요청 메서드
// GET
// GET 메서드는 특정 리소스의 표시를 요청합니다. GET을 사용하는 요청은 오직 데이터를 받기만 합니다.

// HEAD
// HEAD 메서드는 GET 메서드의 요청과 동일한 응답을 요구하지만, 응답 본문을 포함하지 않습니다.

// POST
// POST 메서드는 특정 리소스에 엔티티를 제출할 때 쓰입니다. 이는 종종 서버의 상태의 변화나 부작용을 일으킵니다.

// PUT
// PUT 메서드는 목적 리소스 모든 현재 표시를 요청 payload로 바꿉니다.

// DELETE
// DELETE 메서드는 특정 리소스를 삭제합니다.

// CONNECT
// CONNECT 메서드는 목적 리소스로 식별되는 서버로의 터널을 맺습니다.

// OPTIONS
// OPTIONS 메서드는 목적 리소스의 통신을 설정하는 데 쓰입니다.

// TRACE
// TRACE 메서드는 목적 리소스의 경로를 따라 메시지 loop-back 테스트를 합니다.

// PATCH
// PATCH 메서드는 리소스의 부분만을 수정하는 데 쓰입니다.

