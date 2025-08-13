import { useEffect, useState } from "react";
import { createReview, deleteReview, getReviews, updateReview } from "../api";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import useAsync from "../hooks/useAsync";

const LIMIT = 6; // 불러올 데이터 갯수

function App() {
  const [order, setOrder] = useState("createdAt"); // order의 초기값은 createAt
  const [offset, setOffset] = useState(0); // offset state
  const [hasNext, setHasNext] = useState(false); // 받아올 데이터가 더 있는지 확인용 state
  const [isLoading, loadingError, getReviewsAsync] = useAsync(getReviews); // 비동기처리 커스텀 훅
  const [items, setItems] = useState([]); // item의 상태변화도 관리하기 위해 state로 생성

  const sortedItems = items.sort((a, b) => b[order] - a[order]); // 원하는 order 상태에 따라 정렬 시키기

  const handleNewestClick = () => setOrder("createdAt"); // 상태 = createdAt
  const handleBestClick = () => setOrder("rating"); // 상태 = rating

  const handleDelete = async (id) => {
    // filter를 이용해서 item을 삭제하는 함수
    const result = await deleteReview(id);
    if(!result) return;

    // items  상태 변경 id값이랑 동일한 item을 제외하고 nextItems를 생성
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));  
  };

  const handleLoad = async (options) => { // 비동기 함수 호출
    const result = await getReviewsAsync(options);
    if(!result) return;
    
    const { paging, reviews } = result;

    if (options.offset === 0) { // offset이 0이면
      setItems(reviews); // 처음 불러오기때문에 전체를 바꾸면 된다.
    } else { // offset이 0이 아니라면
      // setItems([...items, ...reviews]); // 기존의 내용 + 새로 불러온 내용이 되어야하므로 스프레드 구문을 이용해서 구현한다

      // 비동기 함수내에서 items가 최신상태가 아닐 수가 있으므로 함수형 업데이트(Functional Update)를 사용한다(=최신상태 유지가능)
      // prevItems는 React가 자동으로 넘겨주는 이전 상태 인자, 이때 이전 상태는 항상 최신을 유지할 수 있다.
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit); // offset 값 변경 (이때까지 불러온 값 + 현재 불러온 값)
    setHasNext(paging.hasNext); // hasNext 값을 변경한다
  };

  const handleLoadMore = async () => { // 다음 페이지를 불러올 함수
    await handleLoad({ order, offset, limit: LIMIT });
  };

  const handleCreateSuccess = (review) => { // post가 성공했을때 작성한 내용을 items에 포함시키기
    setItems((prevItems) => [review, ...prevItems]);
  };

  const handleUpdateSuccess = (review) => { // 리뷰를 수정한 다음에 리스폰스로 도착한 데이터를 반영 
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id); // 수정할 인덱스 찾기 
      return [
        ...prevItems.slice(0, splitIdx),
        review, // 해당 아이디의 인덱스에 수정된 내용을 끼워넣어주기 
        ...prevItems.slice(splitIdx + 1),
      ]
    })
  }

  useEffect(() => { // 컴포넌트가 처음 렌더링이 끝나면 콜백함수를 호출
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]); // 배열은 Dependency List로 이전 렌더링과 배열을 비교해서 달라졌을때만 콜백함수를 호출한다.
  // Dependency List가 빈 배열[]이면 처음가 달라지는 것이 없기때문에 맨처음 한번만 렌더링된다. 

  return (
    <div>
      <div>
        {/* 각 버튼을 누르면 원하는 기준으로 list가 정렬된다 */}
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm onSubmit={createReview} onSubmitSuccess={handleCreateSuccess} />
      <ReviewList items={sortedItems} onDelete={handleDelete} onUpdate={updateReview} onUpdateSuccess={handleUpdateSuccess} />
      {/* 조건부렌더링: 값이 false이면 렌더링 시키지 않는 react 특성을 활용 */}
      {/* lading 중일때 버튼 비활성화 */}
      {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더 보기</button>}
      {/* loadingError가 있다면 메세지를 보여주는 태그 */}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
