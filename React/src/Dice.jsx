import diceBlue01 from './assets/dice-blue-1.svg'; // 이미지 url을 사용할때는 import로 주소를 받아와서 사용

function Dice(){
  return <img src={diceBlue01} alt="주사위" /> // src에 직접적으로 주소값을 넣을 수 없다.
}

export default Dice;