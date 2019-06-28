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

  componentDidMount = async () => {
    const jobs = await fetchJobs();
    this.setState({
      jobs: jobs
    })

    console.log(this.state.jobs);
  }
  
  showJobs = async () => {
    
  }
  
  render(){
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Search />
        </main>
        
      </div>
    );
  }
}

export default App;
