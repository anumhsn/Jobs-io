import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                {/* <h1>jobs.io</h1>
                 */}
                 <Link to="/">jobs.io</Link>
            </div>
        )
    }
}

export default Header;