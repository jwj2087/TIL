export async function getReviews() { // fetch로 데이터를 받아오는 함수
  const res = await fetch('https://learn.codeit.kr/1289/film-reviews/');
  const body = await res.json();
  return body;
}