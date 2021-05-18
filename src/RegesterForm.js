import React from 'react';
import {Link} from 'react-router-dom';

import './RegesterForm.css';
class RegesterForm extends React.Component{
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
                             <h4 class="box-title register-num">Verify Mobile</h4>
                        </div>
                        
            </div>
            <div className='form-body'>
            <form>
  <div class="form-row">
    <div class="form-group col-lg-3">
     
      <input type="phone" class="form-control" id="phone" placeholder="Mobile Number"/>
    </div>
    <div class=" form-group col-lg-2">
    <button type="button" class="btn btn-primary ">
                 Send OTP
             </button>
    </div>
    <div class="form-group col-lg-2">
  <input  type="Text" class="form-control" placeholder="Enter OTP" />
  </div>
  <Link to='/RegestrationFormMain'>
  <div class="form-group col-xs-2 ">
  <button type="button" class="btn btn-success width-100 ">   Verify OTP</button>
              
             
           </div>
              </Link>
              <div class="form-group col-xs-2">
              <button type="button" class="btn btn-secondary">   Resend OTP</button>
            
             </div>
             <div class="form-group col-xs-1">
             <button type="button" class="btn btn-primary">  Reset</button>
               
              </div>
  </div>
 
  
 
          
         </form>
          </div>
          </div>
          </div>
        )
    }
}
export default RegesterForm;