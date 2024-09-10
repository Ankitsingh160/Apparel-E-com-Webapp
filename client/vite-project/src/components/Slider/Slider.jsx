
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { useState } from "react";
const Slider = () => {
    const [CurrentSlide,setCurrentSlide]=useState(0);
    const data=[ 
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto-compress&cs=tinysrgb&w=1600",
        "./images/girl.jpg",
        "https://www.pexels.com/photo/woman-wearing-pink-collared-half-sleeved-top-1036623/",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto-compress&cs=tinysrgb&w=1600",
    ];
   const prevSlide=()=>{
    setCurrentSlide(CurrentSlide==0?2: (prev)=>prev-1);
   }
   const nextSlide=()=>{
    setCurrentSlide(CurrentSlide==2?0: (prev)=>prev+1);
   }

  return (

    <div className="slider">
      <div className="container" style={{transform:`translateX(-${CurrentSlide*100}vw)`}}>
        <img src={data[0]} alt=""></img>
        <img src={data[1]} alt=""></img>
        <img src={data[3]} alt=""></img>
        
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
        
       </div>
        
        
    </div>
  )
}

export default Slider
