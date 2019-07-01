import React from 'react'
import {fetchJobs} from '../services/api-helper'

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

    handleSubmit
    
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

                {
                    this.props.jobs.map((info) => (
                        <div className="job-info" key={info.id}>
                            <img src={info.company_logo} />
                            <p>{info.title} at {info.company}</p>
                            <p>Job Type: {info.type}</p>

                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Search;