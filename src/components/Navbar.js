import {Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return ( 
        <>
       	<header class="header">
		<h1 class="logo"><Link to="/" >Chillax😌 </Link></h1>
      <ul class="main-nav">
          <li> <a href="#openModal-about" className="pom-button">
              <span>Pomodoro ⏰</span>
              </a>
              </li>
          <li><Link to="/">About</Link></li>
     
      </ul>
	</header> 


    {/* MODAL */}

    <div id="openModal-about" className="modalDialog">
      <div>
         <a href="#close" title="Close" className="close">X</a>
         <h2 className="modal-title">Settings⚙️</h2>
         <p className="session-title">Select your study time</p>
         <div className="session-div">
             <button className="">
                <span  className="iconify" data-icon="akar-icons:plus"></span>
             </button>
             <p className="session-time">25:00</p>
             <button className="">
                 <span className="iconify" data-icon="akar-icons:minus"></span>
             </button>
         </div>
            <p className="break-title">Select your break time</p>
         <div className="break-div">
             <button className="">
                <span className="iconify" data-icon="akar-icons:plus"></span>
             </button>
             <p className="break-time">05:00</p>
             <button className="">
                 <span className="iconify" data-icon="akar-icons:minus"></span>
             </button>
         </div>
         <div className="save-div">
             <button className="save-btn">Start Timer</button>
         </div>
       </div>
   </div>
   
   </>
     );
}
 
export default Navbar;