import OceanSound from "../audio_files/ocean.mp3";
import { useState } from "react";

const Ocean = () => {

    const [isPlaying,setIsPlaying] = useState(false)

    const [sound, setSound] = useState( new Audio(OceanSound))

    // Looping through Audio
    sound.loop = true

    const handlePlay = async () =>{
        await sound.play();
        setIsPlaying(true)
        console.log("Playing")
    }


    const handlePause = () => {
        sound.pause();
        setIsPlaying(false)
        console.log("Paused")
    }
    return (  

         <div className="mood-card">
          <button onClick={isPlaying ? handlePause : handlePlay} 
            className={isPlaying ? "card-button" : "card-button-not"}
           > 
                Ocean
              <br></br>
              <br></br>
        <span className="card-icon">
        <span className="iconify" data-icon="bx:bx-water" style={{fontSize:"90px"}}></span>         
        </span>
               
          </button>
            
            </div>  
    );
}
 
export default Ocean;