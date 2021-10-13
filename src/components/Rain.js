import "../App.css";
import RainSound from "../audio_files/rain.mp3";
import {Howl} from "howler";

const Rain = () => {
      let rain = new Howl({
        src: [RainSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await rain.play();
    }
    return ( 
          <div className="mood-card">
          <button onClick={handlePlay}  className="card-button">
                Rain
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}}  name="rainy-outline"></ion-icon>
              </span>
               
          </button>
            
            </div>
    );
}
 
export default Rain;