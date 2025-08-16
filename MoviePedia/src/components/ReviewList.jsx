import { useState } from "react";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";
import "./ReviewList.css";
import useTranslate from "../hooks/useTranslate";

function formatDate(value) {
  // 그냥 날짜 깔끔하게 보이게 하는 함수
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// 각 Review 아이템
function ReviewListItem({ item, onDelete, onEdit }) {
  const t = useTranslate(); // Context를 사용하는 translate Hook 불러오기

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
        <button onClick={handleDeleteClick}>{t('delete button')}</button>
        <button onClick={handleEditClick}>{t('edit button')}</button>
      </div>
    </div>
  );
}

// Review list
function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null); // 수정할 요소의 id

  const handleCancel = () => setEditingId(null);
  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content, imgFile: null };
          // 수정 정보 보내기
          const handleSubmit = (formatDate) => onUpdate(id, formatDate);
          // 수정 성공 리스폰스 반영
          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review); 
            setEditingId(null); // 입력폼 닫기
          }

          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
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
