import React, { Component } from 'react'

class Postform extends Component {

    state = {
        title: '',
        body: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', 
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    body: this.state.body
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.resetForm();
            });
    }
    resetForm = () => {
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
        <div>
            <h2>Add</h2>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label>Title</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                </div>
                <div>
                    <label>Body</label><br />
                    <textarea name="body" value={this.state.body} onChange={this.handleOnChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}
export default Postform;