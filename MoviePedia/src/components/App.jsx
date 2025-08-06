import { useState } from "react";
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

  const handleLoadClick = async () => { // 비동기 함수 호출
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <div>
        {/* 각 버튼을 누르면 원하는 기준으로 list가 정렬된다 */}
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
