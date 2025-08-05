import Board from "./Board";
import Button from "./Button";
import { useState } from "react";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App(){
  // State Lifting : 자식 컴포넌트의 state를 부모 컴포넌트에서 관리하는 것
  // 자식 컴포넌트를 동시에 작동 시키기 위해서 부모에서 관리한다.
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div>
      <Button color="blue" onClick={handleRollClick}>던지기</Button>
      <Button color="red" onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;