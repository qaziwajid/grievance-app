import React from 'react';
import ContactHeaderContent from './ContactHeaderContent';
import "./ContactHeader.css"

// import NavBar from './NavBar';
class ContactHeader extends React.Component {
constructor(props) {
    super(props);
    this.state ={
        items: [
            { id: 1, name: 'Thursday, May 6 2021'},
            { id: 2, name: '94190-234234 | SPCollege123@gmail.com' },
        ]
    };
    }

 render() {
     return (
         
        <div className='ContactHeader'>
           
           <ContactHeaderContent items={this.state.items}/>
          
        </div>
         
         
     
     )

 }
}


export default ContactHeader;