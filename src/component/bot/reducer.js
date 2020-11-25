import { actionTypes } from "./actions";

const initialState = [{}];

const simpleMessageReceived = (state, action) => {
  const { messageReceived } = action;
  return [
    ...state,
    messageReceived
  ];
};

const multipleMessageReceived = (state, action) => {
  const { youtubeUrlReceived } = action;
  return [...state, ...youtubeUrlReceived];
};

const allMessageReceived = (action) => {
  const { allMessage } = action;
  return allMessage;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_RECEIVED:
      return simpleMessageReceived(state, action);
    case actionTypes.YOUTUBE_URL_RECEIVED:
      return multipleMessageReceived(state, action);
    case actionTypes.ALL_MESSAGE:
      return allMessageReceived(action);
    default:
      return state;
  }
};
