import { ADD_QUES, RECEIVE_QUES,ADD_ANSWER } from "../actions/ques";


export const questions =(state={},action)=>{
    switch (action.type) {
        case RECEIVE_QUES:
            return {...state,...action.ques}
        case ADD_QUES:
            return {
                ...state,
                [action.ques.id]: action.ques,
        
            }
        case ADD_ANSWER:
            const {qid,answer,authedUser} = action
            
         return {
            ...state,
            [qid]: {
              ...state[qid],
              [answer]: {
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authedUser])
              }
            }
          }
             
    
        default:
            return state
    }
}
