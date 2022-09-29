import React from 'react'
import {CirclesWithBar} from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Spinner = () => {
  return (
    <div className='w-full h-[calc(100vh-60px)] flex flex-col justify-start items-center pt-40 bg-black'>
      <CirclesWithBar
        height="100"
        width="100"
        color="red"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor="red"
        ariaLabel="circles-with-bar-loading"
      />
      <span className='font-eagle text-[red] mt-3 text-xl'>Loading ...</span>
    </div>
  );
}

export default Spinner