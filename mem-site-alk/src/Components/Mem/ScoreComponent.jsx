export const ScoreComponent = (props) => {
  const score = props.score;
  return (
    <div className={"scoreContainer container"}>
      <div className="row">
        <div className="col-sm">
          <p>Upvotes: {score.upvotes}</p>
        </div>
        <div className="col-sm">
          <button type="button" onClick={props.handleUpvote}>
            Upvote
          </button>
        </div>
        <div className="col-sm">
          <p>Downvotes: {score.downvotes}</p>
        </div>
        <div className="col-sm">
          <button type="button" onClick={props.handleDownvote}>
            Downvote
          </button>
        </div>
      </div>
    </div>
  );
};
