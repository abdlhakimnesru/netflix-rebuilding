import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from '../../../utils/request'

const RowList = () => {
 return (
  <>
  
    <Row
    isLargeRow={true}
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      
      />

      <Row
    
         title="Trending Now"
          fetchUrl={requests.fetchTrending}
       />

       <Row
         title="Action Movies"
          fetchUrl={requests.fetchActionMovies}       
       />

       <Row
         title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}       
       />

       <Row
         title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}       
       />

       <Row
         title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}       
       />

       <Row
         title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}       
       />

       <Row
         title="Top Rated Movies"
          fetchUrl={requests.fetchTopRatedMovies}       
       />

       <Row
         title="Trending"
          fetchUrl={requests.fetchTrending}       
       />

       <Row
         title="Tv Show"
          fetchUrl={requests.fetchTvShow}       
       />
      
    </>

);

}

export default RowList