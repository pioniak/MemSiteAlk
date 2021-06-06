import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import Button from "@material-ui/core/Button";

export const StarComponent = ({hasStar, handleStar}) => {
  return (
    <Button onClick={handleStar}>
      {hasStar ? <StarIcon className={"starColor"} /> : <StarOutlineIcon />}
    </Button>
  );
};
