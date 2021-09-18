import { _saveQuestion,_saveQuestionAnswer } from "../api/_DATA"
import { handleInitialData } from "./shared"

// actions
export const ADD_QUES ='ADD_QUES'
export const RECEIVE_QUES='RECEIVE_QUES'
export const ADD_ANSWER='ADD_ANSWER'

//actions creators

export const addQ =(ques)=>{
    return {
        type:ADD_QUES,
        ques,
    }
}
export const receiveQ =(ques)=>{
    return {
        type:RECEIVE_QUES,
        ques,
    }
}
export const addAnswer=({authedUser,qid,answer})=>{
    return {
        type:ADD_ANSWER,
        answer,
        authedUser,
        qid
    }
}

export const handleAddQ=({optionOneText, optionTwoText})=>{
   return(dispatch,getState)=>{
     const {authedUser}= getState()
     return _saveQuestion({
         optionOneText,
         optionTwoText,
         author:authedUser
     })
     .then((ques)=>dispatch(addQ(ques)
     )).then(dispatch(handleInitialData()))
   }
   
}
export const handleAddA=({qid,answer})=>{
    return (dispatch,getState)=>{
        const {authedUser}=getState()
        return _saveQuestionAnswer({authedUser,qid,answer})
        .then(()=>dispatch(addAnswer({authedUser,qid,answer})))
        .then(dispatch(handleInitialData()))
    }
}