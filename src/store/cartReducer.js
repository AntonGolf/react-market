
const defaultState = {  
    basket: []
  }
  
export function cartReducer(state = defaultState, action){
    switch (action.type) {
        case "ADD_CART":
           return {...state, basket:[ ...state.basket, action.payload]}
        case "CART_REMOVE":
            return {...state, basket: state.basket.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}