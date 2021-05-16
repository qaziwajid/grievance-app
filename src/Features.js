import React from 'react';
import './Features.css';
class Features extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
        };
      }
      Showli=(val,key)=>{
        return(
         <li>{val}</li>
        )
      }
      renderFeature=(val,key)=>{
          return(
           
            <div className='features-detail'>
              <span>{val.Id}</span>
              <ul>
                 
                  {val.Details.map((val,key)=>this.Showli(val,key))}
              </ul>
            </div>
          );
      };
    //   renderDetail=(val,key)=>{
    //     return(
            
    //         <li>{element}</li>
        
    //        )
    //   }
      render(){
          return(
            <div className='Features'>
            <div className='features-heading'>Features</div>
              {this.props.Features.map((val,key)=>this.renderFeature(val,key))}
            </div>
          )
      }
    }
    export default Features;