import { useState } from "react";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";
import "./ReviewList.css";

function formatDate(value) {
  // 그냥 날짜 깔끔하게 보이게 하는 함수
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// 각 Review 아이템
function ReviewListItem({ item, onDelete, onEdit }) {
  // 삭제버튼 클릭시
  const handleDeleteClick = () => {
    onDelete(item.id); // ReviewListItem -> ReviewList -> App으로 item.id 전달
  };

  const handleEditClick = () => {
    // 수정버튼 클릭시 해당 아이디를 넘겨준다.
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </div>
  );
}

// Review list
function ReviewList({ items, onDelete }) {
  const [editingId, setEditingId] = useState(null); // 수정할 요소의 id

  const handleCancel = () => setEditingId(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content, imgFile: null };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
              />
            </li>
          );
        }
        // map을 이용해서 렌더링
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
