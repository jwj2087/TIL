import { useState } from 'react';
import './ReviewForm.css';
import FileInput from './FileInput';

function ReviewForm() {
  const [values, setValues] = useState({ // 상태 하나로 입력폼 관리
    title: '',
    rating: 0,
    content: '',
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // form submit 기본동작 막기
    console.log(values);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      {/* file input은 비제어컴포넌트여야하므로 구현한 상위 컴포넌트를 통해 제어를 한다 */}
      <FileInput name="imgFile" value={values.imgFile} onChange={handleChange} />
      {/* onChange는 바닐라js의 onInput처럼 사용자가 값을 입력할때마다 발생하는 이벤트 */}
      {/* 제어컴포넌트 :  value 속성을 지정하고 사용하는 컴포넌트. 리액트로 지정한 값과 input value 의 값이 항상 같다 */}
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input type="number" name="rating" value={values.rating} onChange={handleInputChange} />
      <textarea name="content" value={values.content} onChange={handleInputChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
