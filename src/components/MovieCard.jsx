import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-35 pr-4'>
        <img src={IMG_CDN_URL+posterPath} alt="" />
    </div>
  )
}

export default MovieCard