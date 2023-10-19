
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './banner.css'
import { imageUrl, trending } from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
      axios.get(trending).then(response=>{
        setMovie(response.data.results[Math.floor(Math.random()*10)])
      })
    },[])
  return (
    <div className='banner' style={{backgroundImage: `url(${movie? imageUrl + movie.backdrop_path:''})`}}>
      <div className='contents'>
        <h1 className='movie-title'>{movie ? movie.title:'Movie'}</h1>
        <div className='banner-button'>
         <button className='button'>Play</button>
         <button className='button'>My List</button>
        </div> 
        <h1 className='description'>{movie ? movie.overview:'Movie'}</h1>
      </div>
    </div>
  ) 
}

export default Banner

