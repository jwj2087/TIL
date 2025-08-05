function Button({ children, onClick }) { // 기본적으로 있는 children prop
  return <button onClick={onClick}>{children}</button>;
}

export default Button;