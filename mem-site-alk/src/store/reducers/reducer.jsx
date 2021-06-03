import { UPVOTE, DOWNVOTE } from "store/actions/actions";
import { cloneDeep } from "lodash";
import { TOGGLE_STAR } from "store/actions/actions";

const IS_HOT_BOUNDARY = 5;

const INITIAL_STATE = {
  hot: [
    {
      id: 2,
      title: "Mem 2",
      imgAltName: "alt text 2",
      imgSrc: "https://i.imgur.com/yMFcye9.jpg",
      upvotes: 6,
      downvotes: 0,
      hasStar: false,
    },
  ],
  regular: [
    {
      id: 1,
      title: "Mem 1",
      imgAltName: "alt text 1",
      imgSrc: "https://i.imgur.com/ijOz34e.jpg",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },
    {
      id: 3,
      title: "Mem 3",
      imgAltName: "alt text 3",
      imgSrc: "https://i.imgur.com/BgVTxML.jpg",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },
  ],
};

const getScore = (mem) => {
  return mem.upvotes - mem.downvotes;
};

const handleUpvote = (state, action) => {
  let newState = cloneDeep(state);
  const allMems = newState.hot.concat(newState.regular);
  const selectedMem = allMems.find((mem) => mem.id === action.payload.id);
  if (getScore(selectedMem) === IS_HOT_BOUNDARY) {
    const index = newState.regular.findIndex((mem) => mem === selectedMem);
    newState.regular.splice(index, 1);
    newState.hot.push(selectedMem);
  }
  selectedMem.upvotes++;
  return newState;
};

const handleDownvote = (state, action) => {
  let newState = cloneDeep(state);
  const allMems = newState.hot.concat(newState.regular);
  const selectedMem = allMems.find((mem) => mem.id === action.payload.id);
  if (getScore(selectedMem) === IS_HOT_BOUNDARY + 1) {
    const index = newState.hot.findIndex((mem) => mem === selectedMem);
    newState.hot.splice(index, 1);
    newState.regular.push(selectedMem);
  }
  selectedMem.downvotes++;
  return newState;
};

const handleToggleStar = (state, action) => {
  let newState = cloneDeep(state);
  const allMems = newState.hot.concat(newState.regular);
  const selectedMem = allMems.find((mem) => mem.id === action.payload.id);
  selectedMem.hasStar = !selectedMem.hasStar;
  return newState;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPVOTE:
      return handleUpvote(state, action);
    case DOWNVOTE:
      return handleDownvote(state, action);
    case TOGGLE_STAR:
      return handleToggleStar(state, action);
    default:
      return state;
  }
};

export default reducer;
