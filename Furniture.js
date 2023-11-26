import React, { Component } from 'react';
import "./Furniture.css";
import { Link } from 'react-router-dom';
class Furniture extends React.Component{
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
    return "OUT STOCK";
    else
return "IN STOCK";
}name2(){
    if(this.state.countone>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name3(){
    if(this.state.count3>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name4(){
    if(this.state.count4>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name5(){
    if(this.state.count5>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name6(){
    if(this.state.count6>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name7(){
    if(this.state.count7>=10)
    return "OUT STOCK";
    else
return "IN STOCK";
}name8(){
    if(this.state.count8>=10)
    return "OUT STOCK";
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
            <h1 className="homep1">FURNITURES</h1>
             <div className="cardhome3">
        <section className="homecards3">
          <div className="s">
            <h2></h2>
          </div>
          <div className="spcard3">
            <img src="https://www.lakkadhaara.com/cdn/shop/products/LKHDINING.png?v=1671528230&width=823" className="dressimg"></img>
            <h2 className="bookp1">Lio Dining Table</h2>
            {/* <p className="bookp">Regular price Rs. 38,000.00</p> */}
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
          <div className="spcard3">
            <img src="https://lh3.googleusercontent.com/spp/AICo9yy5pHdfzN-MdCYHyVGeTZEwhjAF6GtHAhQn4eALLKbKQJmtNfhpeB0odke1MbS47XASp7lVh7qDO2uePMo6NYDBNs2zFm7yxzYDEc2SsCLZ8cW9AhJYBy8ThvC_tx5wnSuNScr-6nJckrlHiLHvdORxlSQFFFa1Le6HHbpa1xmZFR5tV7Y-0kT34PZ4mF6R9a-NZohd0g=s512-rw-pd-pc0x00ffffff" className="dressimg"></img>
            <h2 className="bookp1">Singular Dining table</h2>
            {/* <p className="bookp">Regular price Rs.24,000.00</p> */}
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
          <div className="spcard3">
            <img src="https://lh3.googleusercontent.com/spp/AICo9yz9ieBOhXWd0BBokh4dVL4ymDgZuLxuNMS0NFSMBbh5EgMtDVt9WUi5ywMIh8PpyUe6sYlEGx1mX5h_ayfE8u-oEBwKkQA_FC1VRLbdSicLHh-3naiRVlG-waAGt1MZ0iSLoSGYGcEz1RxD373xaWQJzRkIRD1d9cOsdOOneaF7We-daJWDRsToVPtYESxKsirUNeF5=s512-rw-pd-pc0x00ffffff" className="dressimg"></img>
            <h2 className="bookp1">Dining Chair </h2>
            {/* <p className="bookp">Regualar price. Rs:20,000.00</p> */}
            {/* <p className="bookp">2014 war novel by American author Anthony Doerr.The novel is written in a lyrical style, and almost all of the chapters</p> */}
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
          <div className="spcard3">
            <img src="https://lh3.googleusercontent.com/spp/AICo9yxfgd_JjxhEzJMZ6Ty1AuPoqJPtw2LSS9SY8tW0Lc7pCXPtB2fEtGTAXAyFf5EUU-J0iqRSRs0YPHySDoCvDO359gG5LiKCy56oo1QbUit-eDTr_pA58VaVu5P7cCi_YHWFEutwABC-FT2_r2gG46i6j9Y1nH0ziomHr16AvMLqq-ccMQRpUT7kOogxVViC-M2PXBYmOg=s52-rw-pd-pc0x00ffffff" className="dressimg"></img>
            <h2 className="bookp1">FabricTrack ArmWood</h2>
            {/* <p>Regular price Rs.30,000.00</p> */}
            {/* <p className="bookp"> Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard</p> */}
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
          <div className="spcard3">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQusHolj2_C2lE98ndVnxDhT2lWEne_nITm0kXpyR2WU0DYiFFZWM_xvZ3HrUoWypW18PmXgsY1-XlCW9_pemLTCh3DQB-KtoSsRtiYQSQvJ31rMig1L9hB&usqp=CAE" className="dressimg"></img>
            <h2 className="bookp1">WARDROBES</h2>
            {/* <p className="bookp">By Colleen Hoover is an absolute masterpiece that deserves nothing less than five stars. This emotionally charged novel weaves an intricate</p> */}
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
          <div className="spcard3">
            <img src="https://www.lakkadhaara.com/cdn/shop/products/Rattan.png?v=1642238900&width=823" className="dressimg"></img>
            <h2 className="bookp1">Rattan Solid Wood TV Cabinet</h2>
            {/* <p className="bookp">A 2020 thriller novel by pseudonymous author Riley Sager. The novel was first published on June 30, 2020 through Dutton</p> */}
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
          <div className="spcard3">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZWh9IwDuZLGpI2JAXBXySp8olOry4FrwtRbzJsN9K3lpHG9SckrEQ8PQUmb1nTh_T-Kp38-T8BpIebt8CGwnb8Py5AS9TWgQh09BMKn8&usqp=CAE" className="dressimg"></img>
            <h2 className="bookp1">MODERN KING SIZE BED</h2>
            {/* <p className="bookp">A 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book</p> */}
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
          <div className="spcard3">
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQec1qkV2YljzDfip1Vc4IQhiLB5ph0JOnykwLQIzc3-9ZBXmDxjtKM5002jNwYgw4ejZMIjjJd8VjDHapigavVsatKN_k4GN-hsOuW1JM&usqp=CAE" className="dressimg"></img>
            <h2 className="bookp1">Office Table</h2>
            {/* <p className="bookp"> I CAN I WILL is an inspiring book with powerful lessons, a book that explores one of the most important realities we will always encounter </p> */}
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
export default Furniture;