import { MemComponent } from "Components/Mem/MemComponent";
import { useSelector } from "react-redux";

export const RegularView = (props) => {
  const mems = useSelector(state=>state.regular);
  
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
