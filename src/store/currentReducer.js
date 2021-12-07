
const defaultState = {  
    visible: []
  }
  
export function currentReducer(state = defaultState, action){
    switch (action.type) {
        case "VISIBLE":
           return {...state, visible: state.visible = action.payload}
        default:
            return state
    }
}