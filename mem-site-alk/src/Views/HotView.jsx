import { MemComponent } from "Components/Mem/MemComponent";
import { useSelector } from "react-redux";

export const HotView = (props) => {
  const mems = useSelector((state) => state.hot);

  return (
    <>
      {mems.length > 0
        ? mems.map((mem) => {
            return <MemComponent key={mem.id} data={mem} />;
          })
        : "Nothing here!"}
    </>
  );
};
