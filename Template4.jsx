import React from "react";
import  "./csst/csst3.css";
import Navbarc from "./Navbarc";
import Rightpart from "./Rightpart";
import background from './bgimg.png';




const Template4 = () =>
{
         return(
             <>
         <Navbarc/>
             <div className = "mainc3">
                 <div className  = "lp3" style={{ backgroundImage: `url(${background})` }}>
        

                 <h1 className ="heading">LOGIN</h1>
            
                 <label for="emailid" >@</label>
                  <input   type="text" id="emailid" name="emailid" placeholder = "Enter your email id"></input>
                 <label  for="password">PP</label>
                 <input   type="text" id="password" name="password" placeholder = "Enter your password"></input>
                 
                 <button className = "subleft btnn ">forgot password ?</button>
                 <button className = "subleft btnn">login</button>
                 <div className = "account subleft "> 
                  <span> Don't have an account ?</span>
                  <button className = "subleft btnn">create one </button>
                 </div>





                 </div>
                 <div className = "rp3">
                 <Rightpart/>
                 </div>
             </div>

        
         </>
    )
};

export default Template4;
