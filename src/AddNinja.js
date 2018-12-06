import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Form Submitted",this.state)
        this.props.addNinja(this.state)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handelChange}/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handelChange}/>
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.handelChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;