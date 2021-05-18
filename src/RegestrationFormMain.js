import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './RegesterForm.css';
class RegestrationFormMain extends React.Component{
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
                        <h2 class="alignh2">Online Grievance Form</h2>
                    </div>
                    <div id="ContentPlaceHolder1_dvOTP" class="col-lg-12 box-container">
                         <div class="box-heading">
                             <h4 class="box-title register-num">Basic Details</h4>
                        </div>
                        
            </div>
            <div className='form-body'>
              <form>
                <div class="form-row">
                 <div class="form-group col-lg-3">
                   <label  class="col-lg-3 col-form-label"> Name</label>
                   <input type="text" placeholder="Applicant Name" class="form-control" />
                 </div>
                 
                 <div class="form-group col-lg-3"> 
                 <label  class="col-lg-3 col-form-label">Gender</label>
      <select class="form-control">
        <option>Female</option>
        <option>Male</option>
        </select>
     </div>
     <div class="form-group col-lg-3">
      <label >Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-lg-3">
      <label >D.O.B</label>
      <input type="date" class="form-control" id="inputDOB" placeholder="D.O.B"/>
    </div>
                </div>
              </form>
         
          </div>



                          {/* Basic Detaila */}



          <div id="ContentPlaceHolder1_dvOTP" class="col-lg-12 box-container">
                         <div class="box-heading">
                             <h4 class="box-title register-num">Grievance Details</h4>
                        </div>
                        
            </div>
            <div className='form-body'>
            <Form>
            <Form.Row>
             
          
              <Form.Group as={Col} controlId="formGridGender">
                 <Form.Label>Grievance Details</Form.Label>
                    <Form.Control as="TextArea" controlId="formGridGrievanceDetails">
                     </Form.Control>
                </Form.Group>
   
            </Form.Row>
          <Form.Row>
    
          <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
     
              
          </Form.Row>
          <Button type="submit">Submit form</Button>
          </Form>
          </div>
          </div>
          </div>
        )
    }
}
export default RegestrationFormMain;