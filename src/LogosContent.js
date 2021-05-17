import React from 'react';
import ResponsiveNav from './ResponsiveNav';
import MainButtons from './MainButtons';
import './LogosContent.css';
class LogosContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    
      renderImage=(val,key)=>{
          console.log('values passed',val,key);
        return(
            <img className={val.id} src={val.name} alt='not found'></img>
        );
      };
      renderNavItems=()=>{
        console.log('button cicked');
        return(
           <MainButtons Buttons={this.state.Buttons}/>
        );
      };
    render() {
        return (
            <div className='logosContent'>
                {this.props.images.map((val,key)=>this.renderImage(val,key))}
                <button onClick={this.renderNavItems}>
                <ResponsiveNav />
              
                </button>
               
            </div>
        )
    }
}
export default LogosContent;