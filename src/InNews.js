import React from 'react';
import './InNews.css';
 class InNews extends React.Component{

    renderInNews=(val,key)=>{
        return(
            <a href={val.Id} className='InNews-item'>
               <img src={val.Link} alt='Not Found'/>
            </a>
        );
    };
render(){
    return(
        <div className='InNews-section'>
            {this.props.InNews.map((val,key)=>this.renderInNews(val,key))}
        </div>
    );
  }
}
export default InNews;