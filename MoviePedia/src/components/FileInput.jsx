import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, onChange }) {
  const [preview, setPreview] = useState(); // 미리보기 사진 경로를 위한 상태
  const inputRef = useRef(); // ref 객체를 사용하면 DOM 노드를 직접 참조할 수 있다. 
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => { 
    const inputNode = inputRef.current; //ref current 프로퍼티를 사용하면 DOM 노드를 참조
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  // 컴포넌트 함수에서 외부의 상태를 변경할때 useEffect를 활용(사이드이펙트를 실행하고 싶을때)
  // 페이지 정보 변경, 네트워크 요청, 데이터 저장, 타이머 등 
  useEffect(() => { 
    if (!value) return;
    const nextPreview = URL.createObjectURL(value); // 파일에 대한 주소를 만들어주는 객체
    setPreview(nextPreview); // 이 주소를 통해서 이미지를 미리보기 할 수 있다

    return () => { // 사이드이펙트 정리 함수
      setPreview(); // 받아두었던 주소 상태를 리셋하고
      URL.revokeObjectURL(nextPreview); // 이전의 주소 오브젝트를 해제
    };
  }, [value]);

  // file input은 보안상 이유로 무조건 비제어컴포넌트여야한다. 
  return (
    <div>
      <img src={preview} alt="이미지 미리보기" />
      <input type="file" accept="image/png, image/jpeg" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
