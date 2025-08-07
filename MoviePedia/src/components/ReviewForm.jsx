import { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value);
    setRating(nextRating);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form submit 기본동작 막기
    console.log({
      title,
      rating,
      content,
    });
  };


  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      {/* onChange는 바닐라js의 onInput처럼 사용자가 값을 입력할때마다 발생하는 이벤트 */}
      <input value={title} onChange={handleTitleChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
    </form>
  );
}

export default ReviewForm;
