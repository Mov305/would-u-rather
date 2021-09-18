import { getInitialData } from "../api/_DATA";
import { receiveQ } from "./ques";
import { receiveUser } from "./user";


export const handleInitialData=()=>{
    return (dispatch)=>{
        return getInitialData()
        .then(({users,questions})=>{
            dispatch(receiveQ(questions));
            dispatch(receiveUser(users));
             

        })
    }
}