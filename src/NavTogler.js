
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MainButtons from './MainButtons';
class NavTogler extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            menus: [
                { id: 1, name: 'Home', active: true },
                { id: 2, name: 'About us', active: false },
                { id: 3, name: 'Admissions', active: false },
                { id: 4, name: 'Grievances', active: false },
                { id: 5, name: 'Departments', active: false },
                { id: 6, name: 'Download', active: false },
                { id: 7, name: 'NIRF', active: false },
                { id: 8, name: 'IQAC', active: false },
              ],
              Buttons:[
                {Id:'Grey',Name:'Home',ref:'/'},
                {Id:'Blue' ,Name:'Main Site',ref1:'///spcollege.edu.in/'},
                {Id:'Black',Name:'Post Grievance',ref:'/RegesterForm'},
                {Id:'Grey',Name:'Track Grievance',ref:'/RegesterForm'},
                {Id:'Black',Name:'Department Login',ref:'/RegesterForm'},
                {Id:'Blue' ,Name:'Contact Us',ref:'/RegesterForm'},
               
                
               

            ]
        };
        
      }
    render(){
        return(
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <MainButtons Buttons={this.state.Buttons}/>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        )
    }
}
export default NavTogler;