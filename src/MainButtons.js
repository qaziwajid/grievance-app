import React from 'react';
import {Link} from 'react-router-dom'
import './MainButtons.css';
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
            <a href={val.ref1}> <span className={val.Id}>{val.Name}
                </span>
                </a>
            )
        }
       else{
            return(
                <Link to={val.ref}>
                <span className={val.Id}>{val.Name}
                  </span>
                 
              </Link>
              
          )
            
       }
         
    }

    render(){
        return(
            <div>
               
                <div className='buttons'> 
               
                    {this.props.Buttons.map((val,key)=>this.renderButton(val,key))}
                 </div>
                
            </div>
        )
    }
}
export default MainButtons;