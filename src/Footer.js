import React from 'react';
import './Footer.css';
import FooterContent from './FooterContent';
class Footer extends React.Component{
  constructor(props){
      super(props);
      this.state={
      FooterContent:[
        {Id:'Footer-content',Name:'M.A Road,Srinagar,J&K'},
        {Id:'Footer-content',Name:'0194-2476828'},
        {Id:'Footer-content',Name:'0194-2476828'},
        {Id:'Footer-content',Name:' info@spcollege.edu.in'},
        
      ]
    }
  }
  showlink=(val,key)=>{
      return(
          <div>
             <a href='#'>{val}</a> 
          </div>
      )
  }
    renderFooter=(val,key)=>{
        return(
            
            <div className={val.Id}>
                {val.Name}
                <div className='hr'/>
                < div className='Footer-content'>
                  {
                      val.Links.map((val,key)=>this.showlink(val,key))
                  }
                  
                    {/* <FooterContent FooterContent={this.state.FooterContent}/> */}
                </div>
            </div>
           
               
        )
    }
    render(){
        return(
            <div className='Footer-main'>
                <div className='Footer-image Footer-headings'>
                    <img src='/images/Logo111.png' alt='Not Found'></img>
                    <FooterContent FooterContent={this.state.FooterContent}/>
                </div>
                {this.props.Footer.map((val,key)=>this.renderFooter(val,key))}
            </div>
        )
    }
}
export default Footer;