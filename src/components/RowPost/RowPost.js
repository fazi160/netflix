import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube';
import { API_KEY, img_url } from '../../constants/constant'
function RowPost(props) {
  const [row, setrow] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response) =>{
      console.log(response.data);
      setrow(response.data.results)
    })
  
  
    
  }, [])


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data);
      if (response.data.results.length !==0){
        setUrlId(response.data.results[0])
        
      }else{
        console.log("Array is empty");
      }

    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {row.map((tvShow) => (
          <img onClick={()=>handleMovie(tvShow.id)} className={props.isSmall? 'smallPoster': 'poster'} src={`${img_url + tvShow.backdrop_path}`}/>
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
