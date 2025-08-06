import './ReviewList.css';

function formatDate(value) { // 그냥 날짜 깔끔하게 보이게 하는 함수
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) { // 각 리스트의 내용
  const handleDeleteClick = () => { // 삭제버튼 클릭시
    onDelete(item.id); // ReviewListItem -> ReviewList -> App으로 item.id 전달
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) { // 리스트
  return (
    <ul>
      {items.map((item) => { // map을 이용해서 렌더링
        return (
          <li> 
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
