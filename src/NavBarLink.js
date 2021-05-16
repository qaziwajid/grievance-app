import React from 'react';
import './NavBarLink.css';
class NavBarLink extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
        };
      }
        renderMenuItem = (val, key) => {
            console.log('Values passed to menuitem', val, key);
            // console.log(this.props.onMenuItemClicked)
        
            return (
                <div className="nav-item" key={key} onClick={() => this.props.onMenuItemClicked(val)}>
                <span style={val.active ? { color: 'red' } : {}} className="item">
                  {val.name}
                </span>
              </div>
            );
          };
    
    render() {
        return (
            <div className='nav-bar-link'>    {this.props.menus.map((val, key) => this.renderMenuItem(val, key))}</div>
        );
    }
}
export default NavBarLink;
