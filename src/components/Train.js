import { Howl } from "howler";
import trainSound from "../audio_files/train.mp3"

const Train = () => {
      let train = new Howl({
        src: [trainSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await train.play();
    }
    return (  
          
        <div className="mood-card">
          <button onClick={handlePlay}  className="card-button">
                Train
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon  style={{fontSize:"90px"}} name="train-outline"></ion-icon>      
                </span>
               
          </button>
            
            </div>
           
    );
}
 
export default Train;