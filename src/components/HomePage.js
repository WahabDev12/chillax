import Navbar from "./Pomodoro";
import "../App.css";
import Moods from "./Moods"
import Pomodoro from "./Pomodoro";

const HomePage = () => {
    return ( 
        <div className="home-page">
           <Pomodoro />
            <Moods />
        </div>
    );
}
 
export default HomePage;