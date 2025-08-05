import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import './App.css'; 

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
    <div className="App">
      {/* App-button은 App.css에 설정된 style을 불러오기 위해 사용하는 클래스명 */}
      {/* color는 Button.css에 설정된 style을 불러오기 위해 사용하는 클래스명 */}
      <Button className="App-button" color="blue" onClick={handleRollClick}>
        던지기
      </Button>
      <Button className="App-button" color="red" onClick={handleClearClick}>
        처음부터
      </Button>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;