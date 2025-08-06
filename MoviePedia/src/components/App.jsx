import { useState } from 'react';
import ReviewList from './ReviewList';
import items from '../mock.json';

function App() {
  const [order, setOrder] = useState('createdAt'); // order의 초기값은 createAt
  // 상태에 따라 정렬 시키기
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt'); // 상태 = createdAt
  const handleBestClick = () => setOrder('rating'); // 상태 = rating

  return (
    <div>
      <div>
        {/* 각 버튼을 누르면 원하는 기준으로 list가 정렬된다 */}
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;
