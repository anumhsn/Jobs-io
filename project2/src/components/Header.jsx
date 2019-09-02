import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Link className="home-link" to="/">Home</Link>
                <Link to="/">jobs.io</Link>
            </div>
        )
    }
}

export default Header;