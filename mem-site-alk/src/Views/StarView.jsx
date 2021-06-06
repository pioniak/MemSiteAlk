import { MemComponent } from "components/mem/MemComponent";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStar } from "store/selectors/selectors";

export const StarView = ({ scrollTop }) => {
  const mems = useSelector(getStar);

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
