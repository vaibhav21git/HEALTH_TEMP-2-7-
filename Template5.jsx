import React from "react";
// import  "./csst/csst3.css";
import "./csst/csst5.css";
import Navbarc from "./Navbarc";
import Rightpart from "./Rightpart";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)



const Template5 = () =>
{
         return(
             <>
         <Navbarc/>
             <div className = "mainc5 ">
                 
                 <div className = "lp5">

                 <h1 className = "ht5">Fill Information</h1>
                 <div className = "icony">
                 <label for="emailid" >  <FontAwesomeIcon icon = {['fas' , 'user']}/> </label>
                  <input   type="text" id="emailid" name="emailid" placeholder = "Full Name"></input>
                 </div>
                 <div className = "icony">
                 <label for="dob" >  <FontAwesomeIcon icon = {['fas' , 'at']}/> </label>
                  <input   type="text" id="dob" name="dob" placeholder = "Date of Birth"></input> 
                 </div>
                 <div className = "icony">
                 <label for="mn" >  <FontAwesomeIcon icon = {['fas' , 'hashtag']}/> </label>
                  <input   type="text" id="mn" name="emailid" placeholder = "Mobile Number"></input>
                 </div>
                 <div className = "icony">
                 <label for="idc" >  <FontAwesomeIcon icon = {['fas' , 'id-card']}/> </label>
                  <input   type="number" id="idc" name="emailid" placeholder = "ID card Number"></input>
                 </div>
                 <div className = "icony">
                 <label for="addr" >  <FontAwesomeIcon icon = {['fas' , 'id-badge']}/> </label>
                  <input   type="text" id="addr" name="emailid" placeholder = "Address"></input>
                 </div>
                 <div className = "icony">
                 <label for="cry" >  <FontAwesomeIcon icon = {['fas' , 'flag']}/> </label>
                  <input   type="text" id="cry" name="emailid" placeholder = "Country"></input>
                 </div>
                 <div className = "icony">
                 <label for="zipc" >  <FontAwesomeIcon icon = {['fas' , 'barcode']}/> </label>
                  <input   type="number" id="zipc" name="emailid" placeholder = "Zip/PinCode"></input>
                 </div>
                 <div className = "icony">
                 <label for="langg" >  <FontAwesomeIcon icon = {['fas' , 'language']}/> </label>
                  <input   type="text" id="langg" name="emailid" placeholder = "Choose Language"></input>
                 </div>



                 </div>
                 <div className = "rp3">
                 <Rightpart/>
                 </div>
                 
             </div>

        
         </>
    )
};

export default Template5;



                //    /* <FontAwesomeIcon icon={['fas', 'coffee']} />
                //  <FontAwesomeIcon icon={['fas' , 'userPen']}/> 
                //    <FontAwesomeIcon icon="fa-solid fa-user-pen" />