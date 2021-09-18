import { SET_USER } from "../actions/authedUser";

export const authedUser = (state=null, action)=>{
    switch (action.type) {
        case SET_USER:
           return action.user
    
        default:
           return  state
    }
}