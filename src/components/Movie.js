import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movie}) => {
  movie && console.log(movie)
  return (
    <Link to={`/details/${movie?.id}`}>
    <div className='w-full  py-5  cursor-pointer shadow-md shadow-[#f1a1b1] text-white select-none'>
        <div className='flex justify-between items-center px-3'>
            <span className='text-sm uppercase font-semibold'>{movie?.title.substring(0,20)}</span>
            <span className='text-[10px]'>{movie.year}</span>
        </div>
        <div className='w-full h-full flex justify-center items-center pt-3  overflow-hidden'>
            <img src={movie.poster} alt="" className='object-cover h-full w-full hover:scale-125 transition-all duration-1000 ease-in-out' />
        </div>
    </div>
    </Link>
  )
}

export default Movie