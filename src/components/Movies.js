import React from 'react'
import withWrapperFetch from './Hoc'
import Movie from './Movie'

const Movies = ({movies}) => { 
  return (
    <div className='w-full bg-black pb-20'>       
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 px-3 md:px-10 md:pt-10'>
      {
        movies?.map(movie=>(<Movie movie={movie} key={movie?.id}/>))
       }
      </div>
    </div>
  )
}
 
export default withWrapperFetch(Movies)