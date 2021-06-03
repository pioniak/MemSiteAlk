import { MemComponent } from "Components/Mem/MemComponent";

export const RegularView = (props) => {
  const mems = props.mems;
  const doUpvote = props.doUpvote;
  const doDownvote = props.doDownvote;
  return (
    <>
      {mems.map((mem) => {
        return (
          <MemComponent
            key={mem.id}
            data={mem}
            doUpvote={doUpvote}
            doDownvote={doDownvote}
          />
        );
      })}
    </>
  );
};
