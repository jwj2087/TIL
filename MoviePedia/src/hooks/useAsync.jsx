import { useState } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false); // 현재 loading 상태
  const [error, setError] = useState(null); // 에러 상태

  const wrappedFunction = async (...args) => {
    setPending(true);
    setError(null);
    try {
      return await asyncFunction(...args);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return [pending, error, wrappedFunction];
}

export default useAsync;

/* 기존 App.jsx handleLoad 함수의 비동기 처리 

try {
  setLoadingError(null);
  setIsLoading(true);
  result = await getReviews(options);
} catch (error) {
  setLoadingError(error); // 현재 에러를 넘겨준다
  return;
} finally { // 어쨋든 완료가 되면 loading 중이 아님을 반환
  setIsLoading(false);
}
*/