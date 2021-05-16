import React from 'react';
import './ContactHeaderContent.css'
class ContactHeaderContent extends React.Component {
constructor(props) {
    super(props);
    this.state ={}
    }
    renderContactItems=(val,key)=>{
       return(
        <div className='ContactHeaderItems'>
           {val.name} 
            </div>
       );
    };
 render() {
     return (
             <div className='ContactHeaderItem'>{this.props.items.map((val,key)=>this.renderContactItems(val,key))}</div>
     )
 }
}


export default ContactHeaderContent;