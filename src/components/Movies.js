import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import MovieServices from "../services/MovieServices.js";
import Header from './Header.js'
import MovieList from "./MovieList.js"



function Movies() {
    const dispatch=useDispatch();
    const state=useSelector(state=>state);
    const {status}=state;
    useEffect(()=>{
        if(status==="pending"){
            dispatch(MovieServices)
        }
    },[])
    console.log("state",state)
    if(status==="pending" || status==="running"){
        return <div>Loading....</div>
    }
    else if(status==="error"){
        return <div>{state.error}</div>
    }
    return (
        <div>
           <Header/> 
           <MovieList movies={state.data} />   
        </div>
    )
}

export default Movies
