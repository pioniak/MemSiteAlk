import "assets/scss/mem.scss";

export const MemComponent = (props) => {
  const data = props.data;
  const imgSrc = data.imgSrc ?? "about:blank";
  const imgAltName = data.imgAltName ?? "Alternative text for image";
  const title = data.title ?? "There should be a title";
  const upvotes = data.upvotes;
  const downvotes = data.downvotes;
  const doUpvote = props.doUpvote;
  const doDownvote = props.doDownvote;
  const handleUpvote = () => {
    doUpvote(data.id);
  }
  const handleDownvote = () =>{
    doDownvote(data.id);
  }

  return (
    <>
      <h2>{title}</h2>
      <div className={"memImageContainer"}>
        <img className={"memImage"} src={imgSrc} alt={imgAltName} />
      </div>
      <p>Upvotes: {upvotes}</p>
      <p>Downvotes: {downvotes}</p>
      <button type="button" onClick={handleUpvote}>
        Upvote
      </button>
      <button type="button" onClick={handleDownvote}>
        Downvote
      </button>
    </>
  );
};
