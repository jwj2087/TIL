const BASE_URL = 'https://learn.codeit.kr/api';

export async function getReviews({ order = "createdAt", offset = 0, limit = 6,}) {
  // fetch로 데이터를 받아오는 함수 + order query
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `${BASE_URL}/film-reviews?${query}`
  );
  if (!response.ok) { //reponse 상태를 체크해서 오류가 있으면 오류를 넘긴다
    throw new Error('리뷰를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createReview(formData) { // formData를 받아와서 post를 실행하는 함수
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('리뷰를 생성하는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}