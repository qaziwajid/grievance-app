import React from 'react';
class FooterContent extends React.Component{
    renderFooterContent=(val,key)=>{
        return(
            <div className='Footer-content1'>
                {val.Name}
            </div>
        )
    }
    render(){
        return(
            
                this.props.FooterContent.map((val,key)=>this.renderFooterContent(val,key))
           
        )
    }
}
export default FooterContent;