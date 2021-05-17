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
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Applicant Name</Form.Label>
                <Form.Control type="text" placeholder="Applicant Name" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridGender">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Female</option>
        <option>Male</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridNo">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Mobile NO" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="email" placeholder="Email Id" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>D. O. B</Form.Label>
                <Form.Control type="Text" placeholder="D. O.B" />
              </Form.Group>
            </Form.Row>
          <Form.Row>
    
          <Form.Group  controlId="formGridSubmit">
            <Button variant="primary" size="md" block>
               Submit
             </Button>
              </Form.Group>
          </Form.Row>
         
          </Form>
          </div>
          </div>
          </div>
        )
    }
}
export default RegestrationFormMain;