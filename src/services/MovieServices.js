
import  {applyMiddleware,createStore,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import moviesJSON from '../mockdata/movies.json'
const initialState={
    status:"pending",
    data:[],
    error:null
}

function MovieReducer(state=initialState,action){
    switch(action.type){
        case "FETCH_START":
            return {...state,status:"running"};
        case "FETCH_SUCCESS":
            return {...state,data:action.payload,status:"success"}
        case "FETCH_ERR":
            return {...state,status:"error",error:action.error}
        default:
            return state;
    }
}

export  function Store(){
    const middleWare=applyMiddleware(thunkMiddleware);
    const composeEnhance=compose(middleWare)
    const store=createStore(MovieReducer,undefined,composeEnhance);
    return store;
}

async function mockAPI(){
    
        return moviesJSON
  
}

export default async function MovieServices(dispatch){
    dispatch({type:"FETCH_START"});
    const response= await mockAPI();
    try{

        if(response.length>0){
            dispatch({type:"FETCH_SUCCESS",payload:response})
        }
        else{
            dispatch({type:"FETCH_ERR",error:"Data Not Avaialble"})
        }
    }catch(e){
        dispatch({type:"FETCH_ERR",error:"Data Not Avaialble"})
    }
}