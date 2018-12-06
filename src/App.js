import React, { Component } from 'react';
import unsplash from './api/unsplash'
import Searchbar from './components/Searchbar'
import ImageList from './components/ImageList'



class App extends Component {

  state = {
    images: []
  }

    userSearchTermSubmit = async (term) =>{
    const response = await 
    unsplash.get('https://api.unsplash.com/search/photos', {
      params: {query: term}

    })

    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="App ui container">
        <Searchbar userSearchTermSubmit={this.userSearchTermSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
