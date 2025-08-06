export async function getReviews(order = 'createdAt') { // fetch로 데이터를 받아오는 함수 + order query
  const query = `order=${order}`;
  const response = await fetch(
    `https://learn.codeit.kr/1234/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}