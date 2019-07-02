import React from 'react';
import {Route, Link} from 'react-router-dom';

class OneJob extends React.Component{
    createMarkup=()=> { return {__html: this.props.job.description}; };


    
    render(){
        return(
            <div className="one-job">
                {/* <h1>{JSON.stringify(this.props.job)}</h1> */}
                <h2>{this.props.job.title}</h2>
                <h3>Company: {this.props.job.company}</h3>
                <img src={this.props.job.company_logo ? this.props.job.company_logo : "https://www.nomadsummit.com/wp-content/uploads/2019/02/CreateAnApp.jpg"}  />
                {/* <p>{JSON.parse(this.props.job.description)}</p> */}
                <p>This position is: {this.props.job.type}</p>
                {/* <p>{this.props.job.description}</p> */}
                {/* <p>How to apply: {JSON.parse(this.props.job.how_to_apply)}</p> */}      
                <div dangerouslySetInnerHTML={this.createMarkup()} />

            </div>
        )
    }
}

export default OneJob;