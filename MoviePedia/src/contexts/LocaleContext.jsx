import { createContext, useContext, useState } from "react";

const LocaleContext = createContext(); // 아규먼트로 Context가 제공할 기본 값을 받는다

export function LocaleProvider({ defaultValue='ko', children }) {
  const [locale, setLocale] = useState(defaultValue); // LocaleContext 상태
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
// locale 값을 전달해주는 훅
export function useLocale(){ 
    const context = useContext(LocaleContext);
    // context를 사용하는 커스텀훅을 이용하면 오류처리도 가능하다.
    if(!context) {
      throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다.');
    }

    return context.locale;
}
// setLocale 값을 가져오는 훅
export function useSetLocale(){
const context = useContext(LocaleContext);
  
  if(!context) {
    throw new Error('반드시 LocaleProvider 안에서 사용해야 합니다.');
  }

  return context.setLocale;
}