import React, { Component } from 'react';

class Searchbar extends Component {

    state = {
        userInput: ""
    }

    onInputChange = (event) =>{
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    onFormSubmit= (event) =>{
        event.preventDefault()
        this.props.userSearchTermSubmit(this.state.userInput)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label >Image search</label>
                        <input id="userInput" value={this.state.userInput} onChange={this.onInputChange} type="text"/>   
                    </div>  
                    <button className="ui primary button">Submit</button>
                </form>
                
            </div>
        );
    }
}

export default Searchbar;
