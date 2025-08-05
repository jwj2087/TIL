import Dice from "./Dice";

// 컴포넌트 재사용하기
function Board({ name, color, num, sum, gameHistory }) {
  return (
    <div>
      <h1>{name}</h1>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  );
}

export default Board;