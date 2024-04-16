import React from 'react'
// import Menu from './Menu'
import {useState} from 'react'
// import cross from './cross.svg';
import hamburger from './hamburger.svg'
// import Menu from './Menu'
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Navbar =()=>{
  
    const [isTrue, setTrue] =useState(true);
    function changeHandeler(){
          setTrue((isTrue)=>!isTrue)
         
    }
   
 
    

    return(
        <div>
           <nav className='flex w-[100%] justify-between px-6 items-center  bg-container bgMob bg-contain top-0 bg-gradient-to-r from-[#0B0D0F] z-999 from-0%  via-[#0C2820] via-80% to-[#0C2820] to-100% h-20

           xl:bg-container xl:bgMob xl:bg-contain xl:top-0 xl:bg-gradient-to-r xl:from-[#0B0D0F] xl:z-999 xl:from-0%  xl:via-[#0C2820] xl:via-80% xl:to-[#0B6F4E] xl:to-100%  xl:w-[100%]  '>
            <a  href='#'> 
            <img   src='https://esummit.in./Images/LOGO.svg' alt='Esummit logo' width='206' height='48'></img>
            </a>
            <div className='hidden xl:flex gap-14 py-8'>
                <a href='https://www.esummit.in/' className="bar hover:text-green-500 text-white  ">Home</a>
                <a href='https://www.esummit.in/speakerslist' className="bar hover:text-green-500 text-white  ">Speakers</a>
                <a href='https://www.esummit.in/sponsors' className="bar hover:text-green-500 text-white  ">Parteners</a>
                <a href='#' className="bar hover:text-green-500 text-white  ">Events</a>
                <a href='https://www.esummit.in/tickets' className="bar hover:text-green-500 text-white  ">Tickets</a>
                <a href='https://www.esummit.in/HiRes' className="bar hover:text-green-500 text-white  ">HiRes</a>
                <a href='https://www.esummit.in/agenda' className="bar hover:text-green-500 text-white  ">Agenda</a>
                
            </div>
            <div className='hidden xl:flex gap-6 text-lg font-normal font-gilroy-semiBold '>
                <a href='https://www.esummit.in/login'>
                <button className='btn text-white p-5 mmt-[-0.5rem] flex items-center font-bold h-[3vh] relative overflow-hidden border-2 border-[rgb(69,219,156)] rounded-md '>Login</button>
                </a>
                <a href='https://www.esummit.in/register'>
                <button className='btn text-teal-950  p-5 mmt-[-0.5rem] flex items-center font-bold h-[3vh] relative  overflow-hidden border-2 border-[rgb(69,219,156)] rounded-md bg-[#44FFB0] '>Register</button>
                </a>
            </div>

            <a onClick={changeHandeler} href='#' className=' text-white font-normal text-4xl xl:hidden lg:pr-4'>
                 {
                    isTrue ? (<FaBars/>):(<RxCross2/>)
                 }
            </a>
           </nav>
           <div>
                 <div className={` pb-6 xl:hidden
                 ${ isTrue ? "hidden":"flex bg-black text-white w-full  flex-col text-center pt-16 z-10 gap-8 text-2xl pb-2"}
                 `}>
                    <a href="https://www.esummit.in/"><button className='hover:text-green-500'>Home</button></a>
                    <a href="https://www.esummit.in/speakerslist"><button className='hover:text-green-500'>Speakers</button></a>
                    <a href="https://www.esummit.in/sponsors"><button className='hover:text-green-500'>Partners</button></a>
                    <a href="https://www.esummit.in/events"><button className='hover:text-green-500'>Events</button></a>
                    <a href="https://www.esummit.in/tickets"><button className='hover:text-green-500'>Tickets</button></a>
                    <a href="https://www.esummit.in/HiRes"><button className='hover:text-green-500'>HiRes</button></a>
                    <a href="https://www.esummit.in/agenda"><button className='hover:text-green-500'>Agenda</button></a>
                    <a href="https://www.esummit.in/login" className=''>
                        <button className=' rounded-lg w-[8rem] px-6 py-1 text-teal-950 bg-[#44FFB0]'>Login</button>
                    </a>
                    <a href="https://www.esummit.in/register">
                        <button className=' rounded-lg w-[8rem] px-6 py-1 text-teal-950 bg-[#44FFB0]'>
                        Register
                        </button>
                    </a>
                 </div>
        </div>
           
        </div>
    );
}

export default Navbar;