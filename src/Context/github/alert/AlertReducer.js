const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      //null to make it invisible after 3 sec
      return null;
    default:
      return state;
  }
};
export default alertReducer;
