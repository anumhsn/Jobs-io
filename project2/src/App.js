import React from 'react';
import axios from 'axios';
import './App.css';
import {fetchJobs} from './services/api-helper';
import Header from './components/Header';
import Search from './components/Search';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      jobs: []
    }
  }

  showJobs = async (location) => {
    const jobs = await fetchJobs(location);
    this.setState({
      jobs: jobs
    })  
  }
  
  render(){
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Search 
          // fetchJobs={this.props.fetchJobs}
          showJobs={this.showJobs}
          jobs={this.state.jobs}
          />
        </main>
        
      </div>
    );
  }
}

export default App;
