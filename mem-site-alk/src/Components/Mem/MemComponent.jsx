import "assets/scss/mem.scss";
import { ScoreComponent } from "Components/Mem/ScoreComponent";
import { StarComponent } from "Components/Mem/StarComponent";
import { useDispatch } from "react-redux";
import { doUpvote, doDownvote, doToggleStar } from "store/actions/actions";

export const MemComponent = (props) => {
  const dispatch = useDispatch();
  
  const data = props.data;
  const imgSrc = data.imgSrc ?? "about:blank";
  const imgAltName = data.imgAltName ?? "Alternative text for image";
  const title = data.title ?? "There should be a title";
  const hasStar = data.hasStar;
  const score = { upvotes: data.upvotes, downvotes: data.downvotes };

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
      <h2>{title}</h2>
      <div className={"memImageContainer"}>
        <img className={"memImage"} src={imgSrc} alt={imgAltName} />
      </div>
      <ScoreComponent
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        score={score}
      />
      <StarComponent hasStar={hasStar} handleStar={handleStar} />
    </>
  );
};
