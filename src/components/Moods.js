import {Howl} from "howler"
import "../App.css";
import RainSound from "../audio_files/rain.mp3";
import ThunderSound from "../audio_files/bolt.wav";
import BirdSound from "../audio_files/birds.mp3";
import fanSound from "../audio_files/fan.mp3";


const Moods = () => {

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


    let thunder = new Howl({
        src: [ThunderSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handleThunder = async () =>{
          await thunder.play();
    }

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
        <>
        <div className="moods-div">
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
            <div className="mood-card">
          <button onClick={handleThunder}  className="card-button">
                Lightning
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}}  name="flash-outline"></ion-icon>
              </span>
               
          </button>
            
            </div>
            <div className="mood-card">
          <button onClick={handleBirdChirp}  className="card-button">
                Birds Chirp
              <br></br>
              <br></br>
              <span className="card-icon">
                    <img src="https://img.icons8.com/ios/100/000000/twitter--v1.png"/> 
             </span>
               
          </button>
            
            </div>

        <div className="mood-card">
          <button onClick={handleFanSound}  className="card-button">
                Fan
              <br></br>
              <br></br>
              <span className="card-icon">
                    <img src="https://img.icons8.com/ios/100/000000/air-element.png"/>  
             </span>
               
          </button>
            
            </div>
           
        <div className="mood-card">
          <button onClick={handleBirdChirp}  className="card-button">
                Library
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}} name="book-outline"></ion-icon>         
              </span>
               
          </button>
            
            </div>
        <div className="mood-card">
          <button onClick={handleBirdChirp}  className="card-button">
                Train
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon  style={{fontSize:"90px"}} name="train-outline"></ion-icon>      
                </span>
               
          </button>
            
            </div>
           
        </div>
      </>
    );
}
 
export default Moods;