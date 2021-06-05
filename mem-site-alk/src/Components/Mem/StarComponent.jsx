import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Button from "@material-ui/core/Button";

export const StarComponent = (props) => {
  const hasStar = props.hasStar;
  const handleStar = props.handleStar;
  return (
    <Button onClick={handleStar}>
      {hasStar ? <StarIcon className={"starColor"} /> : <StarOutlineIcon />}
    </Button>
  );
};
