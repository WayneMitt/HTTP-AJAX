import React from 'react';
import './App.css';
import axios from 'axios'
import Friends from './Friends'
import Form from './Form'

class App extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res.data)
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateFriends = (friends) => {
		this.setState({ friends })
	}
 
  render() {
    const { friends } = this.state

    return (
      <div className="App">
        <Friends friends={friends}/>
        <Form key={friends.id} updateFriends={this.updateFriends}/>
      </div>
    );
  }
  
}

export default App;
