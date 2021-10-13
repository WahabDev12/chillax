import { Howl } from "howler";
import fanSound from "../audio_files/fan.mp3";

const Fan = () => {

    let fan = new Howl({
        src: [fanSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handleFanSound = async () =>{
          await fan.play();
    }
    return ( 
           
        <div className="mood-card">
          <button onClick={handleFanSound}  className="card-button">
                Fan
              <br></br>
              <br></br>
              <span className="card-icon">
                        <span style={{fontSize:"90px"}} className="iconify" data-icon="ph:wind-thin"></span>
             </span>
               
          </button>
            
            </div>
    );
}
 
export default Fan;