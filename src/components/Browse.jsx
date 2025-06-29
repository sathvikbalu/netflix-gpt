import React, { use } from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  // Custom hook to fetch now playing movies
  // and dispatch them to the Redux store
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
            MainContainer
              -VideoBackground
              -VideoTitle
            SecondaryContainer
              -MovieList*n
                -MovieCards*n
        */
      }
      </div>
  )
}

export default Browse