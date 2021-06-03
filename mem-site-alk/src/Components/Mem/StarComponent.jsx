export const StarComponent = (props) => {
  const hasStar = props.hasStar;
  const handleStar = props.handleStar;
  return (
    <div>
      <button type="button" onClick={handleStar}>
        {hasStar === false ? "Decorate with Star" : "Remove the Star"}
      </button>
    </div>
  );
};
