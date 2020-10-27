import './App.css';
import axios from 'axios';
import Card from './Card';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followerData: []
    }
  }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/davarg5`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/davarg5/followers`)
      .then(res => {
        this.setState({
          followerData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }



  render() {
    return (
      <div className="App">
        <h1>Github Usercard!</h1>

        <Card user={this.state.user} followerData={this.state.followerData}/> 
      </div>
    );
  }
  
}

export default App;
