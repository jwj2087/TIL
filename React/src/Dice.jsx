import diceBlue01 from './assets/dice-blue-1.svg'; // 이미지 url을 사용할때는 import로 주소를 받아와서 사용
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

// function Dice(props){ //간단하게 보는 props 사용법
//   console.log(props); // {color='blue'}

//   // props 값을 이용해서 렌더 내용을 바꿀 수 있다.
//   const diceImg = props.color === 'red' ? diceRed01 : diceBlue01; 
//   return (
//   <>
//     {/* // src에 직접적으로 주소값을 넣을 수 없다. */}
//     <img src={diceBlue01} alt="파란주사위" />  
//     {/* prop 값에 따라 이미지가 달라짐 */}
//     <img src={diceImg} alt='주사위' /> 
//   </>
//   );
// }

const DICE_IMAGES = { // dice 이미지 객체 배열
  blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
  red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};

function Dice({ color = 'blue', num = 1 }) { // 구조분해를 이용해서 props 대신에 변수+초기값으로 사용할 수 있다.
  const src = DICE_IMAGES[color][num - 1]; // 객체 배열에서 이미지 선택
  const alt = `${color} ${num}`; // alt도 props로 간단하게 표현 가능
  return <img src={src} alt={alt} />;
}

export default Dice;