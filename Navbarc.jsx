import React from "react";
import  "./csst/cssnav.css"

const Navbarc = () =>
{
         return(
             <>
             <div className = "mainnav">
               <div className = "logo">
                   <h1>HEALTH</h1>
               </div>
               <div className = "rightnav">
                   <div className = "rightnavchild">HOME</div>
                   <div className = "rightnavchild">FIND A DOCTOR</div>
                   <div className = "rightnavchild">APPS</div>
                   <div className = "rightnavchild">TESTIMONIALS</div>
                   <div className = "rightnavchild">ABOUT US</div>
               </div>
               </div>            
             </>
    )
};

export default Navbarc;


