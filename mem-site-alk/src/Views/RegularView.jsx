import { MemComponent } from "Components/Mem/MemComponent";
import { useSelector } from "react-redux";
import { getRegular } from "store/selectors/selectors";

export const RegularView = (props) => {
  const mems = useSelector(getRegular);
  
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
