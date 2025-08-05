// const baseButtonStyle = { // style을 하나의 객체로 만들어서 적용 가능하다
//   padding: '14px 27px',
//   outline: 'none',
// };

// const blueButtonStyle = { 
//   ...baseButtonStyle, // 공통된 부분은 그냥 스프레드 구문을 사용해서 적용
// };

import './Button.css'; // css 파일로 style import 


function Button({ color='blue', children, onClick, className='' }) { // 기본적으로 있는 children prop
  // color prop을 받아서 버튼의 스타일을 적용한다
  // const style = color === 'red' ? redButtonStyle : blueButtonStyle;

  // 컴포넌트에 class명을 추가하는 방식으로 style을 적용할 수 있다.
  // className은 부모 컴포넌트에서 style을 적용하기 위해 사용하는 클래스
  const classNames = `Button ${color} ${className}`; // html에 클래스를 여러개 작성하는 거 생각하면 될듯
  return <button className={classNames} onClick={onClick}>{children}</button>;
}

export default Button;