import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { getReviews } from "../api";

function App() {
  const [order, setOrder] = useState("createdAt"); // order의 초기값은 createAt
  const [items, setItems] = useState([]); // item의 상태변화도 관리하기 위해 state로 생성

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 원하는 order 상태에 따라 정렬 시키기

  const handleNewestClick = () => setOrder("createdAt"); // 상태 = createdAt
  const handleBestClick = () => setOrder("rating"); // 상태 = rating

  const handleDelete = (id) => {
    // filter를 이용해서 item을 삭제하는 함수
    const nextItems = items.filter((item) => item.id !== id); // id값이랑 동일한 item을 제외하고 nextItems를 생성
    setItems(nextItems); // items  상태 변경
  };

  const handleLoad = async (orderQuery) => { // 비동기 함수 호출
    const { reviews } = await getReviews(orderQuery);
    setItems(reviews);
  };

  useEffect(() => { // 컴포넌트가 처음 렌더링이 끝나면 콜백함수를 호출
    handleLoad(order);
  }, [order]); // 배열은 Dependency List로 이전 렌더링과 배열을 비교해서 달라졌을때만 콜백함수를 호출한다.
  // Dependency List가 빈 배열[]이면 처음가 달라지는 것이 없기때문에 맨처음 한번만 렌더링된다. 

  return (
    <div>
      <div>
        {/* 각 버튼을 누르면 원하는 기준으로 list가 정렬된다 */}
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
