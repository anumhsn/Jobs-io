import React from 'react';
import {Route, Link} from 'react-router-dom';

class OneJob extends React.Component{
    createMarkup = () => { 
        return {__html: this.props.job.description}; 
    };
    
    render(){
        return(
            <div className="one-job">
                {/* <h1>{JSON.stringify(this.props.job)}</h1> */}
                <div className="data">
                    <h2>{this.props.job.title}</h2>
                    <h3>Company: {this.props.job.company}</h3>
                    <img src={this.props.job.company_logo ? this.props.job.company_logo : "https://www.nomadsummit.com/wp-content/uploads/2019/02/CreateAnApp.jpg"}  />
                    <h4>This position is: {this.props.job.type}</h4>
                </div>
                <div className="more-data">
                    <div dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
            </div>
        )
    }
}

export default OneJob;