const baseButtonStyle = { // style을 하나의 객체로 만들어서 적용 가능하다
  padding: '14px 27px',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '9999px',
  fontSize: '17px',
};

const blueButtonStyle = { 
  ...baseButtonStyle, // 공통된 부분은 그냥 스프레드 구문을 사용해서 적용
  border: 'solid 1px #7090ff',
  color: '#7090ff',
  backgroundColor: 'rgba(0, 89, 255, 0.2)',
};

const redButtonStyle = {
  ...baseButtonStyle,
  border: 'solid 1px #ff4664',
  color: '#ff4664',
  backgroundColor: 'rgba(255, 78, 78, 0.2)',
};

function Button({ color, children, onClick }) { // 기본적으로 있는 children prop
  // color prop을 받아서 버튼의 스타일을 적용한다
  const style = color === 'red' ? redButtonStyle : blueButtonStyle;
  return <button style={style} onClick={onClick}>{children}</button>;
}

export default Button;