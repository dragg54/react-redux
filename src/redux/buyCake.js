export const buyCake =()=>{
    return{
        ...state, noOfCakes:state.noOfCakes - 1
    }
}