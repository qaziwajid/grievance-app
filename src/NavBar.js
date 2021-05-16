import React from 'react';
// import NavBarLink from './NavBarLink';
import MainButtons from './MainButtons';
import './NavBar.css';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            menus: [
                { id: 1, name: 'Home', active: true },
                { id: 2, name: 'About us', active: false },
                { id: 3, name: 'Admissions', active: false },
                { id: 4, name: 'Grievances', active: false },
                { id: 5, name: 'Departments', active: false },
                { id: 6, name: 'Download', active: false },
                { id: 7, name: 'NIRF', active: false },
                { id: 8, name: 'IQAC', active: false },
              ],
              Buttons:[
                {Id:'Grey',Name:'Home'},
                {Id:'Blue' ,Name:'Main Site',},
                {Id:'Black',Name:'Post Grievance'},
                {Id:'Grey',Name:'Track Grievance'},
                {Id:'Black',Name:'Department Login'},
                {Id:'Blue' ,Name:'Contact Us',},
               
                
               

            ]
        };
        
      }
      changeMenuItem = menu => {
        let newMenues = [...this.state.menus];
    
        newMenues = newMenues.map((val, key) => ({ id: val.id, name: val.name, active: false }));
    
        newMenues = newMenues.map((val, key) => {
          if (val.id === menu.id) {
            return { id: val.id, name: val.name, active: true };
          } else {
            return val;
           
          }
        });
    
        this.setState({ menus: newMenues });
      };
    render() {
        return (
          <div className='nav-bar1'>
              {/* <NavBarLink menus={this.state.menus} onMenuItemClicked={this.changeMenuItem}/> */}
                <MainButtons Buttons={this.state.Buttons}/>
             
          </div>
        )
    }
}
export default NavBar;