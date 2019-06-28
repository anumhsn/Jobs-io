import React from 'react';
import axios from 'axios';
import './App.css';
// const api = "54cc1ef81e194b66a254facc9974f1bf";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      blah: []
    }
  }
  
  fetchData = async() => {
    const response = await axios.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-28&sortBy=publishedAt&apiKey=54cc1ef81e194b66a254facc9974f1bf");
    
    return response.data;
  }

  componentDidMount = async () => {
    const blah = await this.fetchData();
    this.setState({
      blah: blah
    })
    debugger;
    console.log(this.state.blah);
  }
  
  
  render(){
    return (
      <div className="App">
        <h1>hey</h1>
      </div>
    );
  }
}

export default App;
