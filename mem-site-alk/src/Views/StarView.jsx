import { MemComponent } from "Components/Mem/MemComponent";
import { useSelector } from "react-redux";
import { getStar } from "store/selectors/selectors";

export const StarView = () => {
  const mems = useSelector(getStar);

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
