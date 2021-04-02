import React from 'react'
import Banner from './banner'
import "./homescreen.css"
import Navbar from "./navbar"
import requests from './request'
import Row from './Row'

function Homescreen() {
    return (
        <div className="homescreen">
            
         <Navbar/>
         
            <Banner/>

            <Row title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
             className=" original"/>
        
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />


        </div>
    )
}

export default Homescreen
