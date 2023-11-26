import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Homepage(){
    return(
        <div className="homebody">
  <div>
  <img className="logo" src="https://t3.ftcdn.net/jpg/05/42/85/04/360_F_542850412_mbdrJttsmcColprJNmMeWgUoNsJLdFJn.jpg"></img>
  </div>
            <ul className="main-navi">
 <a>
   <Link to="/signup">SIGNUP</Link>
 </a>
 <a>
 <Link to="/" className="logout">LOGOUT</Link>
 </a>
 <a>
 <Link to="/about" className="logout">ABOUT US</Link>
 </a>
 <a>
 </a>
</ul>
<div>
    <div>
        
        <div class="wrap">
   <div class="search">
    <div className="searchhome">
        <p className="homep">"Life's journey is a canvas of experiences, and within every challenge lies an opportunity for growth. Let positivity be your guide, turning obstacles into stepping stones on the path to success. Remember, each moment is a chance to create a story worth telling, so live with purpose, kindness, and a heart full of gratitude."</p>
    </div>
   <form class="search-container">
    <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
    <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
  </form>
   </div>
</div>
    </div>
    <div>
        <img className="dummyimg1" src="https://sellerskills.com/wp-content/uploads/2021/05/Inventory-Control.gif"></img>
    </div>
</div>
<br></br><br></br><br></br>
            <div className="cardhome">
          <div className="s">
            <h2 className="homep1">CATEGORY</h2>
          </div>
        <section className="homecards">
          <div className="spcard">
           <Link to="/dress"> <img src="https://i.pinimg.com/564x/e3/96/81/e39681321a5b92b02028ed4f022e709b.jpg" className="surimg"></img></Link>
            <h2>DRESS</h2>
          </div>
          <div className="spcard">
            <Link to="/book">            <img src="https://i.pinimg.com/564x/5e/42/51/5e4251d1fa2894002aa30a3429c020dc.jpg" className="surimg"></img></Link>

            <h2>BOOKS</h2>
          </div>
          <div className="spcard">
            <Link to="/furniture"><img src="https://i.pinimg.com/564x/b3/41/8f/b3418f98c10612640ec733e114146c8b.jpg" className="surimg"></img></Link>
            <h2>FURNITURES</h2>
          </div>
        
        </section>
        
      </div>
      <div className="footer-basic">
  <footer>
    
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="https://www.spglobal.com/en/">Services</a>
      </li>
    <li className="list-inline-item">
        <a href="https://www.spglobal.com/en/">Market price</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Privacy Policy</a>
      </li>
    </ul>
    <p className="copyright">Inventory Control © 2023</p>
  </footer>
</div>
        </div>
    );
}
export default Homepage;