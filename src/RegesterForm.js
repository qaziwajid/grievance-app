import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
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
                        <h2 class="alignh2">Online Grievance Form</h2>
                    </div>
                    <div id="ContentPlaceHolder1_dvOTP" class="col-lg-12 box-container">
                         <div class="box-heading">
                             <h4 class="box-title register-num">Verify Mobile</h4>
                        </div>
                        
            </div>
            <div className='form-body'>
            <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                {/* <Form.Label>Mobile NO.</Form.Label> */}
                <Form.Control type="text" placeholder="Mobile No" />
              </Form.Group>
          
              {/* <Form.Group as={Col} controlId="formGridSecuritycode">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Text" placeholder="Name" />
              </Form.Group> */}
                <Form.Group as={Col} controlId="formGridSubmit">
            <Button variant="primary" size="md" block>
                 Send OTP
             </Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridOTP">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="Text" placeholder="Enter OTP" />
              </Form.Group>
              <Link to='/RegestrationFormMain'>
              <Form.Group as={Col} controlId="formGridSubmit">
            <Button variant="success" size="md" block>
                 Verify OTP
             </Button>
              </Form.Group>
              </Link>
              <Form.Group as={Col} controlId="formGridSubmit">
            <Button variant="info" size="md" block>
                 Resend OTP
             </Button>
              </Form.Group>
               
              <Form.Group as={Col} controlId="formGridSubmit">
            <Button variant="primary" size="md" block>
                Reset
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
export default RegesterForm;