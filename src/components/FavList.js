import axios from "axios";
import { useEffect, useState } from "react";
//import MovieList from "./MovieList";
import Movie from "./Movie";
import {link} from '../links'

function FavList() {
    const [moviesData, setMoviesData] = useState([]);
  //  const [moviesData, setMoviesData] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${link}/getMovies`;
        const result = await axios.get(serverUrl);
        console.log(result.data);
        setMoviesData(result.data);

    }
    const takeNewArr = (newarr) => {
        setMoviesData(newarr)
    }
    /* const takeNewArrDetele = (newarr) => {
        setMoviesData(newarr)
    } */
    useEffect(() => {
        sendReq();

    },[]);
    return (
        <>
            <h1>Fav List</h1>
            <Movie favData={moviesData} takeNewArr={takeNewArr} />

        </>
    )
}
export default FavList;