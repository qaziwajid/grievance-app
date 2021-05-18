import React from 'react';
// import ResponsiveNav from './ResponsiveNav';
// import MainButtons from './MainButtons';
import './LogosContent.css';
class LogosContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           

        };
      }
    
      renderImage=(val,key)=>{
        //   console.log('values passed',val,key);
        return(
            <img className={val.id} src={val.name} alt='not found'></img>
        );
      };
    
      
    render() {
        return (
           
            <div className='logosContent'>
                {this.props.images.map((val,key)=>this.renderImage(val,key))}
               
              
                {/* <ResponsiveNav   /> */}
              
              
                
            </div>
          
        
        )
    }
}
export default LogosContent;