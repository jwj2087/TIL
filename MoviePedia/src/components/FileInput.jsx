function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };
  // file input은 보안상 이유로 무조건 비제어컴포넌트여야한다. 
  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
