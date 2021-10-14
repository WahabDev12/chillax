import "../App.css";
import RainSound from "../audio_files/rain.mp3";
import { useState } from "react";

const Rain = () => {
    const [isPlaying,setIsPlaying] = useState(false)

    const [sound, setSound] = useState( new Audio(RainSound))

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
        <>
          {

            <div className="mood-card">
               <button onClick={ isPlaying ? handlePause  : handlePlay}
                className={isPlaying ? "card-button" : "card-button-not"}>
                Rain
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}}  name="rainy-outline"></ion-icon>
              </span>
                
          </button>
            
            </div>
              
          }

          </>
         
    );
}
 
export default Rain;