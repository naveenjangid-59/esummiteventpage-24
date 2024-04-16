import React from 'react'
import './Footer.css'

const Footer=()=>{
    return(
    <div className='relative bg-container bgMob bg-contain top-0 bg-gradient-to-r from-[#0B0D0F] z-999 from-0%  via-[#0C2820] via-80% to-[#0C2820] to-100%  w-[100%]   pb-10         xl:bg-container xl:bgMob xl:bg-contain xl:top-0 xl:bg-gradient-to-r xl:from-[rgb(11,13,15)] xl:z-999 xl:from-0%  xl:via-[#0C2820] xl:via-80% xl:to-[#0B6F4E] xl:to-100%  xl:w-[100%]  '> 
      <div className=' flex flex-col gap-[5rem]'>
      <div className=' 
      className ="w-[80%] m-auto sm:m-auto md:w-[100%] lg:w-[100%]  flex flex-col text-white max-w-full pb-0 pl-5
     gap-[2rem] md:max-w-[70%] lg:flex-row lg:items-start lg:max-w-[95%] lg:m-auto py-[5rem] lg:gap-[0.8rem]
     '>
        <div className='flex flex-col gap-[2rem] lg:max-w-[40%] lg:gap-[2.5rem]'>
        <div className='flex flex-row justify-start pt-[4rem]  items-center gap-4
                          xs:pl-[2.3rem] 
                          md:gap-[9rem]  lg:gap-[2rem] lg:pt-0 '>
           <div>
           <img  className='h-[55px] w-[180px]' src='https://esummit.in./Images/LOGO.svg' alt='Esummit logo' width='206' height='48'></img>
           </div>
           <div>
            <img className='h-[55px] w-[180px]' src='https://www.esummit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEcellLogo.0981aab6.webp&w=256&q=75' alt='E-cell Logo'></img>
           </div>
        </div>  
        <div>
            <span className='hidden lg:block'>The flagship event of the Entrepreneurship Cell, IIT Roorkee promoting entreprenuership</span>
           </div> 
        </div>
        <div className='flex flex-row gap-8 pl-2 xs:pl-[4.2rem] md:gap-[9rem] lg:gap-[4rem]'>
            <div className='flex flex-col gap-[1.8rem] items-start lg:gap-[3.2rem]' >
                <div className='font-medium text-[1.2rem]'>Our Address</div>
                <div>
                    <div>E-cell office, SAC Building</div>
                    <div>IIT Roorkee</div>
                    <div>Roorkee, UK-247667</div>
                </div>
            </div>
            <div className='flex flex-col gap-[1.8rem]  items-start pr-2 lg:gap-[3.2rem]'>
               <div className='font-medium text-[1.2rem]'>E-mail</div>
               <div>esummit@iitr.ac.in</div>
            </div>
        </div>  
        <div className='flex flex-col gap-[0.5rem] pt-0 pl-2 xs:pl-[4.2rem] xs:gap-[2rem] lg:gap-[3.2rem]'>
            <div>Follow us at </div>
            <div className='flex flex-row gap-4  '>
                <a href='https://www.instagram.com/ecelliitr?igshid=ZDdkNTZiNTM%3D'>
                <img className='h-[20px] w-[20px]' src='https://www.esummit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstagram.b14429c3.png&w=64&q=75' alt='instagram-logo'></img>
                </a>
                <a href=''>
                <img className='h-[20px] w-[20px]' src='https://www.esummit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter.95c5aae0.webp&w=64&q=75' alt='teitter-logo'></img>
                </a>
                <a href=''>
                <img className='h-[20px] w-[20px]' src='https://www.esummit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.dc87c815.png&w=64&q=75' alt='facebook-logo'></img>
                </a>
                <a href=''>
                <img className='h-[20px] w-[20px]' src='https://www.esummit.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkedin.22e81abc.webp&w=64&q=75' alt='linkedin-logo'></img>
                </a>
            </div>
            <div className='absolute bottom-1 text-[0.7rem] lg:hidden  text-center pt-[4rem] '>
            E-Summit 2024 IIT Roorkee. All rights reserved.
            </div>
        </div>    
     </div>
     <p className='text-white max-w-[80%] text-start m-auto'>
     E-Summit 2024 IIT Roorkee. All rights reserved.
     </p>
      </div>
    </div>
    
    );
}

export default Footer;