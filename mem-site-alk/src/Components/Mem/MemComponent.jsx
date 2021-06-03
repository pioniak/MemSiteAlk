import "assets/scss/mem.scss";

export const MemComponent = (props) => {
    const data = props.data;
  const imgSrc = data.imgSrc ?? "about:blank";
  const imgAltName = data.imgAltName ?? "Alternative text for image";
  const title = data.title ?? "There should be a title";
  return (
    <>
      <h2>{title}</h2>
      <div className={"memImageContainer"}>
        <img
          className={"memImage"}
          src={imgSrc}
          alt={imgAltName}
        />
      </div>
    </>
  );
};
