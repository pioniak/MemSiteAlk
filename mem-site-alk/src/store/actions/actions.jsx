export const UPVOTE = "UPVOTE";
export const DOWNVOTE = "DOWNVOTE";
export const TOGGLE_STAR = "TOGGLE_STAR";
export const ADD_MEM = "ADD_MEM";

export const doUpvote = (id) => {
  return { type: UPVOTE, payload: { id: id } };
};
export const doDownvote = (id) => {
  return { type: DOWNVOTE, payload: { id: id } };
};
export const doToggleStar = (id) => {
  return { type: TOGGLE_STAR, payload: { id: id } };
};
