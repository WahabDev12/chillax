import { Howl } from "howler";
import leaveSound from "../audio_files/bush.mp3";

const Leaves = () => {

    let leave = new Howl({
        src: [leaveSound],
        autoplay: false,
        loop: true,
        volume: 0.5,
        onend: () => {
            console.log('Finished!');
        }
    });

    const handlePlay = async () =>{
          await leave.play();
    }
    return ( 
          
        <div className="mood-card">
          <button onClick={handlePlay}  className="card-button">
                Leaves
              <br></br>
              <br></br>
              <span className="card-icon">
                    <ion-icon style={{fontSize:"90px"}} name="leaf-outline"></ion-icon>       
         </span>
               
          </button>
            
            </div>
    );
}
 
export default Leaves;