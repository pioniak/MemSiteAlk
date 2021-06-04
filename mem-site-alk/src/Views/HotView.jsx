import { MemComponent } from "Components/Mem/MemComponent";
import { useSelector } from "react-redux";
import { getHot } from "store/selectors/selectors";

export const HotView = (props) => {
  const mems = useSelector(getHot);

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
