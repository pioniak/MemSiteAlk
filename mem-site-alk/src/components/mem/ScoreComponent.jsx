import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export const ScoreComponent = ({score, handleUpvote, handleDownvote}) => {
  return (
    <div className={"scoreContainer"}>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Button onClick={handleUpvote}>
            <AddIcon />({score.upvotes})
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleDownvote}>
            <RemoveIcon />({score.downvotes})
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
