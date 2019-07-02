import React from 'react'
import {fetchJobs} from '../services/api-helper';
import {Router, Link} from 'react-router-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        const jobs = this.props.jobs;
        let jobResults;
        
        if(jobs.length > 0){
            jobResults=
            <div className="job-card">
                {
                    this.props.jobs.map((info) => (
                        <div className="job-info" key={info.id}>
                            
                             <img src={info.company_logo ? info.company_logo : "https://www.nomadsummit.com/wp-content/uploads/2019/02/CreateAnApp.jpg"} />
                            <h3>{info.title} at {info.company}</h3>
                            <p>Job Type: {info.type}</p>
                            <p>{info.location}</p>
                            <Link to={`/jobs/${info.id}`}>Additional info</Link>
                        </div>
                    ))
                }
           </div>   
        }
        else{
            jobResults=
            <div className="sorry">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d7b3952736003.591b008d30b88.png" />
                <h2>No jobs there! Sorry!</h2>
            </div>
        }
        return(
            <div className="search">
                <form className="input" onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.showJobs(this.state.description, this.state.location)
                    // this.props.showJobs()

                }}>
                    <input name="location" placeholder="location..." type="text" onChange={this.handleChange}/>
                    <input name="description" placeholder="keyword (e.g. JavaScript)" type="text" onChange={this.handleChange} />
                    <button>Search</button>
                </form>
                <div className="job-results">
                    {jobResults}
                </div>
            </div>
        )
    }
}

export default Search;