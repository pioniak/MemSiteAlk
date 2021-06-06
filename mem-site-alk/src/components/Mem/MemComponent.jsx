import "assets/scss/styles.scss";
import { ScoreComponent } from "components/mem/ScoreComponent";
import { StarComponent } from "components/mem/StarComponent";
import { useDispatch } from "react-redux";
import { doUpvote, doDownvote, doToggleStar } from "store/actions/actions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const MemComponent = ({ data }) => {
  const dispatch = useDispatch();

  const {
    imgSrc = "about:blank",
    title = "There should be a title",
    hasStar,
    upvotes,
    downvotes,
  } = data;
  const score = { upvotes: upvotes, downvotes: downvotes };

  const handleUpvote = () => {
    dispatch(doUpvote(data.id));
  };
  const handleDownvote = () => {
    dispatch(doDownvote(data.id));
  };
  const handleStar = () => {
    dispatch(doToggleStar(data.id));
  };

  return (
    <>
      <div className={"memContainer"}>
        <Typography variant="h5">{title}</Typography>
        <div className={"memImageContainer"}>
          <img className={"memImage"} src={imgSrc} alt={title} />
          <Grid container item xs={12}>
            <Grid item xs={9}>
              <ScoreComponent
                handleUpvote={handleUpvote}
                handleDownvote={handleDownvote}
                score={score}
              />
            </Grid>
            <Grid item xs={3}>
              <StarComponent hasStar={hasStar} handleStar={handleStar} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
