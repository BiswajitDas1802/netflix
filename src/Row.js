// import axios from './axios'
// import React from 'react'
// import './row.css'
// import {useState,useEffect} from 'react'

// function Row({title,fetchUrl, isLargeRow= false}) {
    
//     const [movies, setMovies] = useState([])
//     const base_url="https://image.tmdb.org/t/p/original/";

//     useEffect(() => {
        
//         async function fetchData(){
           
//             const request = await axios.get(fetchUrl);
//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [fetchUrl])

//     console.log(movies)
    
    
//     return (
        
//         <div className="row">
//             <h2>{title}</h2>
//             <div className="movies">
//             <div className="row_posters">
//             {movies.map(movies=>(
//                 <img className={`row_poster ${isLargeRow && "row__posterLarge"}`}
//                 key={movies.id}
//                 src={`${base_url}$ {
//                     isLargeRow ? movies.poster_path : movies.backdrop_path
//                 }`} alt={movies.name}/>
//             ))}
//             </div>
//             </div>
//             </div>
        
//     )
// }

// export default Row


import React, { useEffect, useState } from 'react'
import './row.css';
import axios from "./axios"


function Row({title,fetchUrl,isLargeRow=false}) {

const [movies, setMovies] = useState([])
const base_url="https://image.tmdb.org/t/p/original/"

       useEffect(()=>{
         async function fetchData(){
             const request = await axios.get(fetchUrl);
         setMovies(request.data.results)
         return request;
        }
         fetchData();
       },[fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map(movie =>(
                <img className=" row_poster" src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                 alt={movie.name} 
                 key={movie.id}/>
            ))}
            </div>
        </div>
    )
}

export default Row
