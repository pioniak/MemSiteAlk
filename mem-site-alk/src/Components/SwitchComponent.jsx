import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { RegularView } from "Views/RegularView";
import { cloneDeep } from "lodash";

const INITIAL_MEMS = [
  {id: 1, title:"Mem 1", imgAltName: "alt text 1", imgSrc:"https://i.imgur.com/ijOz34e.jpg", upvotes: 0, downvotes: 0},
  {id: 2, title:"Mem 2", imgAltName: "alt text 2", imgSrc:"https://i.imgur.com/yMFcye9.jpg", upvotes: 0, downvotes: 0},
  {id: 3, title:"Mem 3", imgAltName: "alt text 3", imgSrc:"https://i.imgur.com/BgVTxML.jpg", upvotes: 0, downvotes: 0}
]

export const SwitchComponent = () => {
  const [mems, setMems] = useState(INITIAL_MEMS);
  const upvote = (id) =>{
    const newMems = cloneDeep(mems);
    const updatedMem = newMems.find(mem => mem.id === id);
    updatedMem.upvotes++;
    console.log(newMems);
    setMems(newMems);
  }
  const downvote = (id) =>{
    const newMems = cloneDeep(mems);
    const updatedMem = newMems.find(mem => mem.id === id);
    updatedMem.downvotes++;
    console.log(newMems);
    setMems(newMems);
  }

  return (
    <>
      <Switch>
      <Route path="/" exact={true}>
          <p>HomePage</p>
        </Route>
        <Route path="/hot">
          <p>There will be HOT page soon!</p>
        </Route>
        <Route path="/regular">
          <RegularView mems={mems} doUpvote={upvote} doDownvote={downvote}/>
        </Route>
        <Route path="*">
          <div>Uuups! Page Not Found! :(</div>
        </Route>
      </Switch>
    </>
  );
};
