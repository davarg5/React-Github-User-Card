import './App.css';
import axios from 'axios';
import Card from './Card';
import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
  text-align: center;
`

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followerData: [],
      name: ''
    }
  }

  fetchUser = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchFollowers = (name) => {
    axios.get(`https://api.github.com/users/${name}/followers`)
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
    this.fetchUser('davarg5');
    this.fetchFollowers('davarg5');
  }

  handleChange = e => {
    this.setState({name: e.target.value})
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchUser(this.state.name);
    this.fetchFollowers(this.state.name);
  }


  render() {
    return (
      <div className="App">
        <h1>Github Usercard!</h1>
        <Search>
        <h2>Search Users</h2>
                <form onSubmit={this.handleSearch}>
                    <input onChange={this.handleChange} type='text' />
                    <button>Fetch User</button>
                </form>
        </Search>
        <Card user={this.state.user} followerData={this.state.followerData}/> 
      </div>
    );
  }
  
}

export default App;
