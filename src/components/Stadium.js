import { Howl } from "howler";
import stadiumSound from "../audio_files/stadium.mp3";

const Stadium = () => {

      let stadium = new Howl({
        src: [stadiumSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await stadium.play();
    }
    return (  
          <div className="mood-card">
          <button onClick={handlePlay}  className="card-button">
                Stadium
              <br></br>
              <br></br>
              <span className="card-icon">
                   <ion-icon style={{fontSize:"90px"}} name="football-outline"></ion-icon>     
                </span>
               
          </button>
            
            </div>
    );
}
 
export default Stadium;