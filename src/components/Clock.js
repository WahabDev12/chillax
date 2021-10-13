import { Howl } from "howler";
import clockSound from "../audio_files/clock.mp3"

const Clock = () => {
    
    let fan = new Howl({
        src: [clockSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await fan.play();
    }
    return (  
        <div className="mood-card">
          <button onClick={handlePlay} className="card-button">
                Clock
              <br></br>
              <br></br>
              <span className="card-icon">
                  <ion-icon style={{fontSize:"90px"}} name="time-outline"></ion-icon>
               </span>
               
          </button>
            
            </div>
    );
}

export default Clock;