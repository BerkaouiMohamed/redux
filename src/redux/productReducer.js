import { ADD_PRODUCT, ADD_PRODUCTS, BUY_PRODUCT } from "./actionTypes";

const intialState = [{ id: 0, title: "keybord", price: 100 }]
function productReducer(state = intialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: return [...state, action.payload];
    case BUY_PRODUCT:return state.filter(p=>p.id!=action.payload)
    case ADD_PRODUCTS:return [...state,...action.payload]
        default: return state;
  }
}
export default productReducer