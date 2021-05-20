import React from 'react';
import {Link} from 'react-router-dom'
import './MainButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Nav from 'react-bootstrap/Nav';
class MainButtons extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        };
    }
   

    renderButton=(val,key)=>{
        if(val.ref1)
        {
            return(
                <a href={val.ref1}>
                {/* <div className={val.class}> */}
                <Nav.Link href={val.ref1}>{val.Name}</Nav.Link>
                 {/* </span> */}
                 
                </a>
                // </div>  
                
            )
        }
       else{
            return(
                
                <Link to={val.ref}>
                   
                {/* <div className={val.class}> */}
                <Nav.Link href={val.ref}><FontAwesomeIcon icon="coffee" color="white" />{val.Name}</Nav.Link>
                {/* <Nav.Link href="#features">Features</Nav.Link> */}
                {/* <span className={val.Id}>{val.Name} */}
                  {/* </span> */}
                
              
              {/* </div> */}
              </Link>
          )
            
       }
         
    }

    render(){
        return(
            <div>
               
                <div className='buttons'> 
               
                    {this.props.Buttons.map((val,key)=>this.renderButton(val,key))}
                    {/* {this.props.Button} */}
                 </div>
                
            </div>
        )
    }
}
export default MainButtons;