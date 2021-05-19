import React from 'react';
import {Link} from 'react-router-dom';

import './RegesterForm.css';
class TrackGrievance extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div className='form-container'>
      
                <div className='form-main-box'>
                    <div className='col-lg-12 text-centre form-heading-border'>
                        <h3 class="alignh2">Online Grievance Form</h3>
                    </div>
                    <div id="ContentPlaceHolder1_dvOTP" class="col-lg-12 box-container">
                         <div class="box-heading">
                             <h4 class="box-title register-num">Track Grievance</h4>
                        </div>
                        
            </div>
            <div className='form-body'>
            <form>
  <div class="form-row">
    <div class="form-group col-lg-4">
     
      <input type="phone" class="form-control" id="phone" placeholder="Grievance Number"/>
    </div>
  
    <div class="form-group col-lg-4">
     
      <input type="phone" class="form-control" id="phone" placeholder="Mobile Number"/>
    </div>
  <Link to='/RegestrationFormMain'>
  <div class="form-group col-lg-4 ">
  <button type="button" class="btn btn-success width-100 "> View Status</button>
              
             
           </div>
              </Link>
             
  </div>
 
  
 
          
         </form>
          </div>
          </div>
          </div>
        )
    }
}
export default TrackGrievance;