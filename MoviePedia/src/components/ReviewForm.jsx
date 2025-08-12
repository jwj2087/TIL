import { useState } from "react";
import { createReview } from "../api";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmitSuccess,
  onCancel,
}) {
  const [values, setValues] = useState(initialValues); // 상태 하나로 입력폼 관리
  const [isSubmitting, setIsSubmitting] = useState(false); // submit 로딩 중 상태
  const [submittingError, setSubmittingError] = useState(null); // submit err 상태

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // form submit 기본동작 막기

    const formData = new FormData(); // 받아온 데이터를 form 형태로 만들기
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;
    try {
      setSubmittingError(null); // err x
      setIsSubmitting(true); // loading 중 (리퀘스트 보내는 중)
      result = await createReview(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { review } = result;
    setValues(INITIAL_VALUES);
    onSubmitSuccess(review); // 리스폰스가 성공했고 그 결과를 넘겨주는 prop
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      {/* file input은 비제어컴포넌트여야하므로 구현한 상위 컴포넌트를 통해 제어를 한다 */}
      <FileInput
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      {/* onChange는 바닐라js의 onInput처럼 사용자가 값을 입력할때마다 발생하는 이벤트 */}
      {/* 제어컴포넌트 :  value 속성을 지정하고 사용하는 컴포넌트. 리액트로 지정한 값과 input value 의 값이 항상 같다 */}
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button disabled={isSubmitting} type="submit">
        확인
      </button>
      {/* onCancel이 있을때만 취소버튼이 보임 */}
      {onCancel && <button onClick={onCancel}>취소</button>}
      {submittingError && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
