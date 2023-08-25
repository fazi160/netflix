import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'

import { img_url } from '../../constants/constant'
function RowPost(props) {
  const [row, setrow] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) =>{
      console.log(response.data);
      setrow(response.data.results)
    })
  
  
    
  }, [])
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {row.map((tvShow) => (
          <img className={props.isSmall? 'smallPoster': 'poster'} src={`${img_url + tvShow.backdrop_path}`}/>
        ))}
      </div>
    </div>
  )
}

export default RowPost
