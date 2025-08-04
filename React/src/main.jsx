import ReactDOM from 'react-dom/client';
import App from './App';

const product = 'MacBook';
const model = 'Air';

function handleClick(){
  alert('start');
}
// React v18 이후 문법
// ReactDOM.createRoot() 를 사용해서 root 를 만든 다음 root.render() 를 사용하는 문법. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // root.render() 함수 안에 작성한다 

  <> {/* Fragment나 빈<>태그를 이용해서 여러 html태그를 묶어서 사용할 수 있다. */} 
    <h1>나만의 {product + model} 주문하기</h1>
    {/* onClick에 직접 함수를 넣어 사용할 수 있다. */}
    <button onClick={handleClick}>확인</button> 


    {/* 컴포넌트 활용 */}
    <App /> 
  </>
  
);
