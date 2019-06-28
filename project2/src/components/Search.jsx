import React from 'react'

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location: ''
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
                <form onSubmit={this.handleSubmit}>
                    <input name="location" placeholder="location..." type="text" onChange={this.handleChange}/>
                    
                </form>
            </div>
        )
    }
}

export default Search;