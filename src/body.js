import React from 'react';
import Logos from './Logos';
import NavBar from './NavBar';
import MainBody from './MainBody';
import ContactHeader from './header';
import ContactHeaderContent from './ContactHeaderContent';
import './body.css';
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            items: [
                { id: 1, name: 'Copyright @ DIT'},
                { id: 2, name: '94190-234234 | SPCollege123@gmail.com' },
            ]
        };
        }
    render() {
        return (
            <div className='Body'>
                <div className='fixed'>
                <ContactHeader/>
                <Logos/>
                <NavBar/>
                </div>
                <MainBody/>
                <div className='ContactHeader'>
                <ContactHeaderContent items={this.state.items}/>
                </div>
            </div>
        )
    }
}
export default Body;