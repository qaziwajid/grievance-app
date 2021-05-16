import React from 'react';
import LogosContent from './LogosContent'
import './Logos.css';
class Logos extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            images: [
                { id: 1, name: "/images/logo11.png" },
                { id: 2, name: "/images/govtl.png" },
                // { id: 3, name: 'Admissions', active: false },
                // { id: 4, name: 'Grievances', active: false },
                // { id: 5, name: 'Departments', active: false },
                // { id: 6, name: 'Download', active: false },
                // { id: 7, name: 'NIRF', active: false },
                // { id: 8, name: 'IQAC', active: false },
              ]
        };
        
      }
    render() {
        return (
            <div className='background-body'>
                <LogosContent images={this.state.images} />
               
            </div>
        )
    }
}
export default Logos;