import Dice from "./Dice";

function App(){ // 함수를 이용해 컴포넌트를 만들어 재사용할 수 있다.
  return ( // ()를 이용하면 여러줄에 걸쳐 작성이 가능하다.
    <div>
      App 컴포넌트!
      {/* 컴포넌트에 속성(props)을 지정할 수 있다. 숫자를 표현할때는 {}를 사용해야한다 */}
      <Dice color='red' num={5}/>  
    </div>
  );
}

export default App;