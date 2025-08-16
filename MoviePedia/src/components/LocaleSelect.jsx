import { useLocale, useSetLocale } from "../contexts/LocaleContext";

function LocaleSelect() {
  const locale = useLocale();
  const setLocale = useSetLocale();

  // lacale State 를 변경할 함수
  const handleChange = (e) => setLocale(e.target.value);

  return (
    <select value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LocaleSelect;
