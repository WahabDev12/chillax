import "../App.css";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Pomodoro = () => {

    const [displayTime,setDisplayTime] = useState(25*60);
    const [breakTime,setBreakTime] = useState(5*60);
    const [sessionTime,setSessionTime] = useState(23*60)
    const [timerOn,setTimerOn] = useState(false);
    
    //Format time function
    const formatTime = (time) =>{
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return(
            (minutes < 10 ? "0" + minutes : minutes)
             + ":" + (seconds < 10 ? "0" + seconds:seconds)
        )
    }

    // ADDING TIME INTERVALS

    const changeSessionTimeUp = (interval) => {
        setTimerOn(true)
        setSessionTime((prev) => prev + interval)
        if(timerOn){
            setDisplayTime(sessionTime + interval)
        }
         
    }
    const changeBreakTimeUp = (interval) => {
            setBreakTime((prev) => prev + interval)
         
    }

    // START TIMER

    const startTimer = () =>{
        setTimerOn(true)
    }

    // SUBSTRACTING TIME INTERVALS

    const changeSessionTimeDown = (interval) => {
          setTimerOn(true)
          if(sessionTime <= 60 && interval < 0){
                return
            }
            setSessionTime((prev) => prev + interval);
           if(timerOn){
            setDisplayTime(sessionTime + interval)
        }
         
    }
    const changeBreakTimeDown = (interval) => {
        if(breakTime <= 60 && interval < 0){
                return
            }
            setBreakTime((prev) => prev + interval)
         
    }


    return ( 
        <>
   
   <header class="header">
		<h1 class="logo"><Link to="/" >Chillax😌 </Link></h1>
      <ul class="main-nav">
          <li> <a href="#openModal-about" className="pom-button">
              <span> 
                {
                  !timerOn &&
                  "Pomodoro ⏰"
                }
                  </span>
              <span className="active-timer">
                {
                  timerOn &&
                   formatTime(displayTime)
                }
                  </span>
              </a>
              </li>
          <li><Link to="/">About</Link></li>
     
      </ul>
	</header> 
    
    
    
    {/* MODAL */}

    <div id="openModal-about" className="modalDialog">
      <div>
         <a href="#close" title="Close" className="close">X</a>
         <h2 className="modal-title">Settings⚙️</h2>
         <p className="session-title">Select your study time</p>
         <div className="session-div">
             <button 
                onClick={()=> changeSessionTimeUp(60)}
             >
                <span class="iconify" data-icon="akar-icons:arrow-up"></span>
             </button>
             <p className="session-time">{formatTime(sessionTime)}</p>
             <button 
                onClick={()=> changeSessionTimeDown(-60)}
             
             >
                 <span className="iconify" data-icon="akar-icons:arrow-down"></span>
             </button>
         </div>


            <p className="break-title">Select your break time</p>
         <div className="break-div">
             <button
                onClick={()=> changeBreakTimeUp(60)}
             
             >
                <span class="iconify" data-icon="akar-icons:arrow-up"></span>
             </button>
             <p className="break-time">{formatTime(breakTime)}</p>
             <button 
                onClick={()=> changeBreakTimeDown(-60)}

             >
                 <span className="iconify" data-icon="akar-icons:arrow-down"></span>
             </button>
         </div>
         <div className="save-div">
             <button onClick={startTimer} className="save-btn">
                 <a style={{color:"white"}} href="#close">Start Timer</a>
             </button>
         </div>
       </div>
   </div>
   
   </>
     );
}
 
export default Pomodoro;