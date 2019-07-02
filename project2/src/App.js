import React from 'react';
import axios from 'axios';
import './App.css';
import {fetchJobs, fetchJobsNoL, fetchJobsNoDes} from './services/api-helper';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import {Route, Link} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      jobs: [],
      // description: ''
    }
  }

  showJobs = async (description, location) => {
    if(location === ''){
      const jobsD = await fetchJobsNoL(description);
      this.setState({
        jobs: jobsD
      })
    }
    
    else if(description === ''){
      const jobsL = await fetchJobsNoDes(location);
      this.setState({
        jobs: jobsL
      })
    }
    else {
      const jobs = await fetchJobs(description, location);
      this.setState({
        jobs: jobs,
        // description: description
      })  
    }
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
        <footer>
          <Footer />
        </footer>
        
      </div>
    );
  }
}

export default App;
