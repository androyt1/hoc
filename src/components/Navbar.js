import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[scrolled,setScrolled]=useState(false)
    const handleScroll=()=>{
        if(window.scrollY>60){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    window.addEventListener('scroll',handleScroll)

  return (
    <nav className={`flex justify-between items-center px-3 md:px-10 h-[60px] shadow-md transition-all duration-500 ease-in-out  sticky top-0 z-[30] ${scrolled ? 'bg-[#D2042D] text-red-100 shadow-slate-600':' bg-slate-900 text-[#f1a1b1] shadow-slate-200'}`}>
        <Link to='/' className='text-xl font-semibold'>Movies World</Link>
        <ul>
            <li className='text-xs inline-block ml-5'><Link to='/'>Home</Link></li>
            <li className='text-xs inline-block ml-5'><Link to='/'>Fav</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar