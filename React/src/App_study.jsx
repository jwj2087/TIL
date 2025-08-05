import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App_study() { // 함수를 이용해 컴포넌트를 만들어 재사용할 수 있다.
  const [num, setNum] = useState(1); //useState(초기값)을 이용해서 state 생성
  // useState는 [state, setter함수] 형태를 반환한다. 이때 state의 값은 setter 함수로만 변경이 가능하다.
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum); // state를 1~6 중에 랜덤한 수로 설정
    setSum(sum + nextNum);
    // 참조형의 경우 주소값을 가지기때문에 배열 내부가 바뀌더라도 주소값의 변경은 x -> 새로 렌더되지 않음 
    // 내부가 바뀌는 것을 인식하기 위해 스프레드 문법으로 배열 내용을 펼치는 방식으로 구현 -> 새로 렌더함
    setGameHistory([...gameHistory, nextNum]); 
  };

  const handleClearClick = () => {
    setNum(1); // state를 1로 설정(초기화)
    setSum(0);
    setGameHistory([]);
  };

  return ( // ()를 이용하면 여러줄에 걸쳐 작성이 가능하다.
    <div>
      App 컴포넌트!
      <div>
        {/* children prop을 사용할때는 이렇게 그냥 태그 사이에 넣어주면 된다 
        문자열 뿐만 아니라 다른 컴포넌트나 HTML 태그도 사용할 수 있다. */}
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      {/* 컴포넌트에 속성(props)을 지정할 수 있다. 숫자를 표현할때는 {}를 사용해야한다 */}
      <div>
        <h2>나</h2>
        <Dice color='blue' num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {gameHistory.join(', ')} 
      </div>
    </div>
  );
}

export default App_study;