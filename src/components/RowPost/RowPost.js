import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState()
    useEffect((url = props.url) => {
      axios.get(url).then(res=>{
        const array = res.data.results
          for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      setMovies(array)
      })},[props.url]) 
    const opts = {
      heigth : '390',
      width: '100%',
      playerVars: { 
        autoplay : 1
      }
    }
    const handleMovie =(id)=>{
      console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
          if(response.data.results.length!==0){
              setUrlId(response.data.results[0])
          }
      })
    } 
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.filter(x=>x.backdrop_path!==null).map(x=>{
              return(
              <div className='content'>  
              <img onClick={()=>handleMovie(x.id)} className={props.isSmall?'smallPoster':'poster'} alt='movie' src={`${imageUrl+x.backdrop_path}`}/>
              <div className='title'>
                  <p className='text'>{x.title}</p>
              </div>
              </div>  
              )}
          )}
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  ) 
} 

export default RowPost
