import React from 'react';
import axios from 'axios';
import './App.css';
import {fetchJobs} from './services/api-helper';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      jobs: [],
      // description: ''
    }
  }

  showJobs = async (description, location) => {
    const jobs = await fetchJobs(description, location);
    this.setState({
      jobs: jobs,
      // description: description
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
        <footer>
          <Footer />
        </footer>
        
      </div>
    );
  }
}

export default App;
