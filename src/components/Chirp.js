import BirdSound from "../audio_files/birds.mp3";
import { useState } from "react";


const Chirp = () => {


    const [isPlaying,setIsPlaying] = useState(false)

    const [sound, setSound] = useState( new Audio(BirdSound))

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
             <div className="mood-card">
          <button onClick={isPlaying ? handlePause : handlePlay} 
                className={isPlaying ? "card-button" : "card-button-not"} >
                Birds Chirp
              <br></br>
              <br></br>
              <span className="card-icon">
                    <span style={{fontSize:"90px"}} className="iconify" data-icon="ph:twitter-logo-thin"></span>      
                </span>
               
          </button>
            
            </div>
            </>

      );
}

 
export default Chirp;