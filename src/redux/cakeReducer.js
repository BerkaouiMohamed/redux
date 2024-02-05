const intialState =50
function cakeReducer(state = intialState, action) {
  switch (action.type) {
    case "BUY_CAKE": return state-1;
    case "ADD_CAKE":return state+1;
    case "BUY_PRODUCT":return state-1
    default: return state;
  }
}
export default cakeReducer