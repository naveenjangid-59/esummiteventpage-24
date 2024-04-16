import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {useState} from 'react'
import Footer from './components/Footer'
// import Menu from './components/Menu'


// import ToastContainer from './components/ToastContainer'

import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from 'react'
// import Navbar from './components/Navbar'

const App=()=> {

  

  const [cardData ,setCardData] = useState([]);
  // const[url, setUrl] =useState('');

  async function fetchData(){
    try{
          
        let response = await fetch("https://api.esummit.in/events/all");
        let output = await response.json();
       
        setCardData(output);
    }
    catch(e){
          toast.error("Something went wrong"); 
    }
   }
   useEffect(()=>{
    fetchData();
   },[])

  
  return (
    <div className='relative'>
     <Navbar />
    
     <Hero cardData ={cardData}/>
     <Footer></Footer>

    </div>
  );
}

export default App;
