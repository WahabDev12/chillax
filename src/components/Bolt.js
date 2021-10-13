import ThunderSound from "../audio_files/bolt.wav";
import {Howl} from "howler";

const Bolt = () => {
    
    let thunder = new Howl({
        src: [ThunderSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await thunder.play();
    }

    return (
        <div className="mood-card">
          <button onClick={handlePlay}  className="card-button">
                Lightning
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}}  name="flash-outline"></ion-icon>
              </span>
               
          </button>
            
            </div>
    );
}
 
export default Bolt;