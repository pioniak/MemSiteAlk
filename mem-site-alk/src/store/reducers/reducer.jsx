import { UPVOTE, DOWNVOTE, TOGGLE_STAR } from "store/actions/actions";
import { cloneDeep } from "lodash";
import { generateId } from "functions/idGenerator";

const IS_HOT_BOUNDARY = 5;

const INITIAL_STATE = {
  star: [],
  hot: [
    {
      id: generateId(),
      title: "Mem 2",
      imgAltName: "alt text 2",
      imgSrc: "https://i.picsum.photos/id/907/500/500.jpg?hmac=1JG7-2YxQq4FkxYTIwNTsXH1FJw5WZoGoXCTCONnoJw",
      upvotes: 6,
      downvotes: 0,
      hasStar: false,
    },
  ],
  regular: [
    {
      id: generateId(),
      title: "Mem 1",
      imgAltName: "alt text 1",
      imgSrc: "https://i.picsum.photos/id/380/500/500.jpg?hmac=o_4mmgTx-0zibRHLUpnQEYKwQawZ3z7NHiqkXbhJi80",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },
    {
      id: generateId(),
      title: "Mem 3",
      imgAltName: "alt text 3",
      imgSrc: "https://i.picsum.photos/id/23/500/500.jpg?hmac=WRUB3E1JcA5w3ROvUL_VM7jz75mMxTJ82IEsZoaCwEE",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },{
      id: generateId(),
      title: "Mem 4",
      imgAltName: "alt text 4",
      imgSrc: "https://i.picsum.photos/id/45/500/500.jpg?hmac=KZ-kuXRiRuRjXKcoLzeNxs2AjEbpN0myBDwGv5w9Cmg",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },{
      id: generateId(),
      title: "Mem 5",
      imgAltName: "alt text 5",
      imgSrc: "https://i.picsum.photos/id/421/500/500.jpg?hmac=5R2cYtYmW8bc3oqsYoUg87NQyIgf_0c7I6htlwkeI0g",
      upvotes: 0,
      downvotes: 0,
      hasStar: false,
    },{
      id: generateId(),
      title: "Mem 6",
      imgAltName: "alt text 6",
      imgSrc: "https://i.picsum.photos/id/896/500/500.jpg?hmac=xAwwqe_shGYhtQYi5kLaOId0_XyAa7ujG_TAP7yrKjo",
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
    newState.hot.unshift(selectedMem);
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
    newState.regular.unshift(selectedMem);
  }
  selectedMem.downvotes++;
  return newState;
};

const handleToggleStar = (state, action) => {
  let newState = cloneDeep(state);
  const allMems = newState.hot.concat(newState.regular);
  const selectedMem = allMems.find((mem) => mem.id === action.payload.id);
  selectedMem.hasStar = !selectedMem.hasStar;
  if (selectedMem.hasStar) {
    newState.star.unshift(selectedMem);
  } else {
    const index = newState.star.findIndex((mem) => mem === selectedMem);
    newState.star.splice(index, 1);
  }
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
