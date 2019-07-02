import React from 'react';
import {Route, Link} from 'react-router-dom';

class OneJob extends React.Component{
    
    
    render(){
        return(
            <div className="one-job">
                <Route path="/jobs/:id" />
                {/* <Link to="/jobs" onClick={()=> {}}></Link> */}
            </div>
        )
    }
}

export default OneJob;