import { Howl } from "howler";
import BirdSound from "../audio_files/birds.mp3";


const Chrip = () => {

    let birdsChirp = new Howl({
        src: [BirdSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handleBirdChirp = async () =>{
          await birdsChirp.play();
    }

    return (
             <div className="mood-card">
          <button onClick={handleBirdChirp}  className="card-button">
                Birds Chirp
              <br></br>
              <br></br>
              <span className="card-icon">
                    <span style={{fontSize:"90px"}} className="iconify" data-icon="ph:twitter-logo-thin"></span>      
                </span>
               
          </button>
            
            </div>

      );
}
 
export default Chrip;