import React from 'react'
import withWrapperFetch from './Hoc'
import {useParams,Link} from 'react-router-dom'

const Details = ({movies}) => {
    const{id}=useParams()
   
    const movie=movies.find(movie=>movie.id===Number(id))
   

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2'>
         <div className='w-full flex flex-col justify-center items-center bg-black md:px-10 text-[#D2042D]'>
            <h4 className='text-2xl border-b-4 border-b-[#D2042D] mb-2 py-2 md:py-4 md:text-4xl text-center   font-bold  leading-loose font-eagle uppercase'>{movie?.title}</h4>
            <div className='w-full text-xl py-1 md:py-1 md:text-2xl text-center flex justify-between  font-semibold  leading-loose font-eagle'><span>Directed By</span> <span>{movie?.director}</span></div>
            <div className='px-3 w-full text-md py-1 md:py-1 md:text-xl text-center md:text-left font-semibold  leading-loose font-eagle flex justify-between'><span>Rating</span> <span>{movie?.rating}</span> </div>
            <div className='px-3 w-full text-md py-1 md:py-1 md:text-xl text-left md:text-left font-semibold  leading-loose font-eagle flex justify-between'><span>Year</span> <span>{movie?.year}</span> </div>
            <div className='px-3 w-full text-md py-1 md:py-1 md:text-xl text-center md:text-left font-semibold  leading-loose font-eagle flex justify-between'><span>RunTime</span> <span> {movie?.runtime} mins</span></div>
            
            <div className='w-full mt-4 mb-4 md:mt-12 flex justify-center'>
              <Link to='/' className='w-[40%] py-2 font-eagle shadow-md shadow-[#D2042D] text-black bg-[#fff] rounded-md flex justify-center'>Back to Movies</Link>
            </div>
        </div>
        <div className='w-full border-r-2 border-slate-300 md:p-10 flex justify-center items-start bg-black'>
            <img src={movie?.poster} alt="" className='h-[80vh] object-cover' />
        </div>       
    </div>
  )
} 

export default withWrapperFetch(Details)