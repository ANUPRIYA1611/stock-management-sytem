import React, { Component } from 'react';
import "./Book.css";
import { Link } from 'react-router-dom';
class Book extends React.Component{
    state = { count: 0 ,countone:0,count3:0,count4:0,count5:0,count6:0,count7:0,count8:0,name:"Zero"}
    changeCount(){
        if(this.state.count===0 )
        return "0";
        else if(this.state.count===10)
        return "9";
        else
        return this.state.count;
        }
name(){
    if(this.state.count>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name2(){
    if(this.state.countone>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name3(){
    if(this.state.count3>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name4(){
    if(this.state.count4>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name5(){
    if(this.state.count5>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name6(){
    if(this.state.count6>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name7(){
    if(this.state.count7>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}name8(){
    if(this.state.count8>=10)
    return "OUT OF STOCK";
    else
return "IN STOCK";
}
 second(){
    if(this.state.countone===0 )
    return"0";
    else if(this.state.countone===10)
    return"9";
    else
    return this.state.countone;
    } six(){
        if(this.state.count6===0 )
        return"0";
        else if(this.state.count6===10)
        return"9";
        else
        return this.state.count6;
        }
        seven(){
            if(this.state.count7===0 )
            return"0";
            else if(this.state.count7===10)
            return"9";
            else
            return this.state.count7;
            } eight(){
                if(this.state.count8===0 )
                return"0";
                else if(this.state.count8===10)
                return"9";
                else
                return this.state.count8;
                }
    three(){
        if(this.state.count3===0 )
        return"0";
        else if(this.state.count3===10)
        return"1";
        else
        return this.state.count3;
        }
        four(){
            if(this.state.count4===0 )
            return"0";
            else if(this.state.count4===10)
            return"1";
            else
            return this.state.count4;
            }five(){
                if(this.state.count5===0 )
                return"0";
                else if(this.state.count5===10)
                return"1";
                else
                return this.state.count5;
                }

    render(){
     return(
         <div>
           <div>
  <img className="logo" src="https://t3.ftcdn.net/jpg/05/42/85/04/360_F_542850412_mbdrJttsmcColprJNmMeWgUoNsJLdFJn.jpg"></img>
  </div>
            <ul className="main-navi">
 <a>
 <Link to="/" className="logout">LOGOUT</Link>
 </a>
 <a>
 <Link to="/homepage" className="logout">HOME</Link>
 </a>
 <a>
 </a>
</ul>
            <h1 className="homep1">BOOKS</h1>
             <div className="cardhome1">
        <section className="homecards1">
          <div className="s">
            <h2></h2>
          </div>
          <div className="spcard1">
            <img src="https://m.media-amazon.com/images/I/4197WRMJRcL.jpg" className="bookimg"></img>
            <h2 className="bookp1">MOTIVATION</h2>
            <p className="bookp">The Motivational Book: making habits, benefitting life through tricks and tips. - Kindle edition by Raval, Dirgh, Kumar, Avinash.</p>
            <span style={{fontSize:15,color:"green",fontStyle:"italic",fontWeight:"bold"}}>{this.name()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count===0} onClick={() =>
 { this.setState({ count: this.state.count - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.changeCount()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count===10}
 onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://m.media-amazon.com/images/I/517MT5F7NOL.jpg" className="bookimg"></img>
            <h2 className="bookp1">MOTIVATION</h2>
            <p className="bookp">365 Days of The Best Positive, Inspirational and Motivational Quotes said by Famous People: Greatest Year of Daily Wisdom</p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name2()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.countone===0} onClick={() =>
 { this.setState({ countone: this.state.countone - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.second()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.countone===10}
 onClick={() => { this.setState({ countone: this.state.countone + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://img1.od-cdn.com/ImageType-400/5054-1/A42/E55/4F/%7BA42E554F-6265-4426-A129-47FEDE1EBC99%7DImg400.jpg" className="bookimg"></img>
            <h2 className="bookp1">FICTION</h2>
            <p className="bookp">2014 war novel by American author Anthony Doerr.The novel is written in a lyrical style, and almost all of the chapters</p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name3()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count3===0} onClick={() =>
 { this.setState({ count3: this.state.count3 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.three()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count3===10}
 onClick={() => { this.setState({ count3: this.state.count3 + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2020-05/15/23/asset/055e07cd8f2e/sub-buzz-3206-1589584307-17.jpg" className="bookimg"></img>
            <h2 className="bookp1">NON-FICTION</h2>
            <p className="bookp"> Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard</p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name4()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count4===0} onClick={() =>
 { this.setState({ count4: this.state.count4 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.four()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count4===10}
 onClick={() => { this.setState({ count4: this.state.count4 + 1 }) }}>+</button>
          </div>
          <div className="s">
            <h2></h2>
          </div>
          <div className="spcard1">
            <img src="https://m.media-amazon.com/images/I/81FummIc2eL._AC_UF1000,1000_QL80_.jpg" className="bookimg"></img>
            <h2 className="bookp1">NON-FICTION</h2>
            <p className="bookp">By Colleen Hoover is an absolute masterpiece that deserves nothing less than five stars. This emotionally charged novel weaves an intricate</p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name5()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count5===0} onClick={() =>
 { this.setState({ count5: this.state.count5 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.five()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count5===10}
 onClick={() => { this.setState({ count5: this.state.count5 + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotSlKbH1OyC4kbvnRIN8DFaT_iy59PrrPmptnNtnSaSwuLiZ2" className="bookimg"></img>
            <h2 className="bookp1">THRILLER</h2>
            <p className="bookp">A 2020 thriller novel by pseudonymous author Riley Sager. The novel was first published on June 30, 2020 through Dutton</p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name6()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count6===0} onClick={() =>
 { this.setState({ count6: this.state.count6 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.six()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count6===10}
 onClick={() => { this.setState({ count6: this.state.count6 + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf" className="bookimg"></img>
            <h2 className="bookp1">FICTION</h2>
            <p className="bookp">A 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book</p>
            <span style={{fontSize:15,fontStyle:"italic",fontWeight:"bold",color:"green"}}>{this.name7()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count7===0} onClick={() =>
 { this.setState({ count7: this.state.count7 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.seven()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count7===10}
 onClick={() => { this.setState({ count7: this.state.count7 + 1 }) }}>+</button>
          </div>
          <div className="spcard1">
            <img src="https://m.media-amazon.com/images/I/41gsx2ICCML.jpg" className="bookimg"></img>
            <h2 className="bookp1">MOTIVATION</h2>
            <p className="bookp"> I CAN I WILL is an inspiring book with powerful lessons, a book that explores one of the most important realities we will always encounter </p>
            <span style={{fontSize:15,fontStyle:"italic",color:"green",fontWeight:"bold"}}>{this.name8()}</span>
            <br></br>
            <button style={{width:35,height:25,backgroundColor:"green"}}
 disabled={this.state.count8===0} onClick={() =>
 { this.setState({ count8: this.state.count8 - 1 }) }}>- </button>
 <span style={{padding:15,fontSize:15,fontStyle:"italic",fontWeight:"bold"}}>{this.eight()} ITEM ADDED</span>
 <button 
 style={{width:35,height:25,backgroundColor:"green"}}disabled={this.state.count8===10}
 onClick={() => { this.setState({ count8: this.state.count8 + 1 }) }}>+</button>
          </div>
          
        </section>
      </div>
      <br></br>
      <br></br>
         </div>
     );
 }
}
export default Book;