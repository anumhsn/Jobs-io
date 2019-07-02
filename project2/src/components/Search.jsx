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

                <div className="job-card">
                {
                    this.props.jobs.map((info) => (
                        <div className="job-info" key={info.id}>
                            <Link to={`/jobs/${info.id}`}>More info</Link>
                             <img src={info.company_logo ? info.company_logo : "https://www.nomadsummit.com/wp-content/uploads/2019/02/CreateAnApp.jpg"} />
                            <h3>{info.title} at {info.company}</h3>
                            <p>Job Type: {info.type}</p>
                            <p>{info.location}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Search;