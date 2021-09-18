
//action type
export const SET_USER ='SET_USER'
//action creator
export const setUser =(user)=>({
    type:SET_USER,
    user
})


export const handleSetUser=(name)=>{
    return (dispatch)=>{
        dispatch(setUser(name))
    }
}
