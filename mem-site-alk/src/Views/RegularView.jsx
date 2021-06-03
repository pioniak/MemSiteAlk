import { MemComponent } from "Components/Mem/MemComponent";

export const RegularView = (props) => {
const mems = props.mems;
console.log(mems);
  return (
    <>
      <p>It's Regular page prototype!</p>
      {mems.map(mem => {
        return (<MemComponent key={mem.id} data={mem}/>)
      })}
    </>
  );
};
