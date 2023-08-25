import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constant'
import './Banner.css'
import axios from '../../axios'
import { img_url } from '../../constants/constant'

function Banner() {
    const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results = response.data.results;
      const randomIndex = Math.floor(Math.random() * results.length);
      // console.log(results[randomIndex])
      setMovie(results[randomIndex])
    })
  }, [])
  

  return (
    <div
     style={{backgroundImage: `url(${movie ? img_url+movie.backdrop_path :""})`}}>
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ''}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview: ""}</h1>
      </div>
      <div className="fade_bottom">

      </div>
    </div>
    </div>
  )
}

export default Banner
