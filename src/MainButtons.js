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
                <div className={val.class}>
            <a href={val.ref1}> <span className={val.Id}>{val.Name}
                </span>
                </a>
                </div>  
            )
        }
       else{
            return(
                <Link to={val.ref}>
                <div className={val.class}>
                
                <span className={val.Id}>{val.Name}
                  </span>
                
              
              </div>
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