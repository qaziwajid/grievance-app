import React from 'react';
import './MainButtons.css';
class MainButtons extends React.Component{
    constructor(props){
        super(props);
        this.state={
         
        };
    }
    renderButton=(val,key)=>{
        return(
           
                <span className={val.Id}>{val.Name}</span>
              
            
        )
    }
    render(){
        return(
            <div className='buttons'> 
                {this.props.Buttons.map((val,key)=>this.renderButton(val,key))}
            </div>
        )
    }
}
export default MainButtons;