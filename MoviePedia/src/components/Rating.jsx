import './Rating.css';

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating = 0, onSelect, onHover }) {
  // selected가 true 일때 .selected를 추가해서 style을 변경
  const className = `Rating-star ${selected ? 'selected' : ''}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined; // click
  const handleMouesOver = onHover ? () => onHover(rating) : undefined; // hover

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouesOver}
    >
      ★
    </span>
  );
}

function Rating({ className, value = 0, onSelect, onHover, onMouseOut }) {
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {/* map을 이용해서 렌더링하기  */}
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;