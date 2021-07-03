import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Logos from './Logos';
// import NavBar from './NavBar';
import MainBody from './MainBody';
import ContactHeader from './header';
import InNews from './InNews';
import NavTogler from './NavTogler';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import  RegesterForm  from './RegesterForm';
import  TrackGrievance  from './TrackGrievance';
import ContactHeaderContent from './ContactHeaderContent';
import './body.css';
import RegesterationFormMain from './RegestrationFormMain';
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            items: [
                { id: 1, name: 'Copyright © '+ new Date().getFullYear()+ ' All Rights Reserved'},
                { id: 2, name: 'Designed and Developed by Department of I.T S.P College' },
            ],
            InNews:[
              {Id:'//cusrinagar.edu.in',Link:"/images/cus.png"},
              {Id:1,Link:"/images/ck.png"},
              {Id:1,Link:"/images/dst.png"},
              {Id:1,Link:"/images/jkhigher.png"},
              {Id:1,Link:"/images/ku.png"},
              {Id:1,Link:"/images/ugc.png"},
              {Id:1,Link:"/images/iust.png"},
              {Id:1,Link:"/images/psc.png"},
            ],
            Footer:[
              // {Id:1,Name:'/images/Logo111.png'},
              {Id:'Footer-headings',Name:'Important Links',Links:['> All College News','> Downloads','> College gallery','> Vision And Mission','> From Principals Desk','> About Us','> Contact Us','> All Notifications','> All Departments'
            ,'> All Tenders']},
              {Id:'Footer-headings' ,Name:'Social Presence',Links:['FaceBook','Instagram']},
            
            ]
        };
        }
    render() {
        return (
          <Router>
            <div className='Body'>
                <div className='fixed'>
                <ContactHeader/>
                <Logos/>
                <NavTogler/>
                {/* <NavBar/> */}
                </div>
                
                 <Switch>
                <Route path="/" exact component={MainBody}/>
                <Route path="/RegesterForm" exact component={RegesterForm}/>
                <Route path="/TrackGrievance" exact component={TrackGrievance}/>
                <Route path="/RegestrationFormMain" exact component={RegesterationFormMain}/>
                </Switch>
                <InNews InNews={this.state.InNews}/>
                <Footer Footer={this.state.Footer}/>
                <div className='ContactHeader'>
                <ContactHeaderContent items={this.state.items}/>
                </div>
            </div>
            </Router>
        )
    }
}
export default Body;