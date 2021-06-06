import { MemComponent } from "components/mem/MemComponent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getHot } from "store/selectors/selectors";

export const HotView = ({ scrollTop }) => {
  const mems = useSelector(getHot);

  useEffect(() => {
    scrollTop();
  }, [scrollTop]);

  return (
    <div className="memsContainer">
      {mems.length > 0
        ? mems.map((mem) => {
            return <MemComponent key={mem.id} data={mem} />;
          })
        : "Nothing here!"}
    </div>
  );
};
