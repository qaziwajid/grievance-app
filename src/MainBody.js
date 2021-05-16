import React from "react";
import "./MainBody.css";
// import MainButtons from "./MainButtons";
import Features from './Features';
import InNews from './InNews';
import Footer from './Footer';
class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Buttons: [
        { Id: "Blue", Name: "Post Grievance" },
        { Id: "Black", Name: "Track Grievance" },
        { Id: "Grey", Name: "Department Login" },
      ],
      Features:[
        {Id:'Easy To Use',Details:['Post Your Grieviance Anywhere Any Time','Track Your Grievance By just Entering Your Details']
      },
        {Id:'Transparency',Details:['Grievances Cannot be Deleted/tempered by anyone including the Admin','All the reports and Grievances are submitted to the Principal']
      } 
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
        
      }
    };
  
  render() {
    return (
      <div>
        <div className="main-div">
          <div className="Main-image">
          <div className="transparent"></div>
            <img src="/images/lib.jpg" alt=" Not Found" />
          </div>
          
          <div className="text">
            <div className="main-text">
              S.P College <br />
              Grievance Cell
            </div>
            <div className="sub-text">Yes! We are Listening....</div>
          </div>
          {/* <MainButtons Buttons={this.state.Buttons}/> */}
        </div>
        <div className="column-about">
          <div className="about-heading">About The <br/>Platform</div>
          <div className="about-details">
            Amet officia labore voluptate cillum culpa.Aute irure mollit ex nisi
            id.Cupidatat excepteur magna anim dolore laboris qui ullamco ullamco
            eiusmod consectetur ea aliquip.Nisi aliquip cupidatat Lorem ea
            fugiat ad incididunt do velit fugiat nisi aute ad.ECulpa dolore
            culpa aliquip ex ut adipisicing excepteur nulla.Deserunt amet cillum
            non.
          </div>
        </div>
        <div className='features'>
          <div className='faetures-image'>
            <img src='/images/news.jpg' alt='not found'/>
          </div>
          <Features Features={this.state.Features}/>
        </div>
        <InNews InNews={this.state.InNews}/>
        <Footer Footer={this.state.Footer}/>
      </div>
    );
  }
}

export default MainBody;
