export const actionTypes = {
  MESSAGE_RECEIVED: "MESSAGE_RECEIVED",
  YOUTUBE_URL_RECEIVED: "YOUTUBE_URL_RECEIVED",
  ALL_MESSAGE: "ALL_MESSAGE",
};

export const multipleMessageReceived = (youtubeUrlReceived) => ({
  type: actionTypes.YOUTUBE_URL_RECEIVED,
  youtubeUrlReceived,
});

export const simpleMessageReceived = (messageReceived) => ({
  type: actionTypes.MESSAGE_RECEIVED,
  messageReceived,
});

export const allMessageReceived = (allMessage) => ({
  type: actionTypes.ALL_MESSAGE,
  allMessage,
});
