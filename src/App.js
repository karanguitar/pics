import React, { Component } from 'react';
import Searchbar from './components/Searchbar'



class App extends Component {

  userSearchTermSubmit = (term) =>{
    console.log(term)
  }

  render() {
    return (
      <div className="App ui container">
        <Searchbar userSearchTermSubmit={this.userSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
