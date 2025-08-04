import diceBlue01 from './assets/dice-blue-1.svg'; // 이미지 url을 사용할때는 import로 주소를 받아와서 사용
import diceRed01 from './assets/dice-red-1.svg';

function Dice(props){
  console.log(props); // {color='blue'}

  // props 값을 이용해서 렌더 내용을 바꿀 수 있다.
  const diceImg = props.color === 'red' ? diceRed01 : diceBlue01; 
  return (
  <>
    {/* // src에 직접적으로 주소값을 넣을 수 없다. */}
    <img src={diceBlue01} alt="파란주사위" />  
    {/* prop 값에 따라 이미지가 달라짐 */}
    <img src={diceImg} alt='주사위' /> 
  </>
  );
}

export default Dice;