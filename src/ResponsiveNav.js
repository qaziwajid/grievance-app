import React from 'react';
class ResponsiveNav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Display:'none',
        }
    }
   
    render(){
        // console.log(this.state);
        return(
        <div className='responsive-nav'>
            <div className='nav-icon'></div>
            <div className='nav-icon'></div>
            <div className='nav-icon'></div>
       </div>
        )
    }
}
export default ResponsiveNav;