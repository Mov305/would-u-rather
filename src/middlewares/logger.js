export const logger =(store)=>(next)=>(action)=>{
    const returnValue = next(action)
    console.log('The new state is:', store.getState())
    return returnValue;
}