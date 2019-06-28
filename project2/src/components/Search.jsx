import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <form>
                    <input name="location" placeholder="location..."/>
                    
                </form>
            </div>
        )
    }
}

export default Search;