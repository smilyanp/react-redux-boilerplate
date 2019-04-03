import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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
        this.props.createPost(this.state);
        this.resetForm();
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

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

// const mapStateToProps = {
//     createPost
// }

export default connect(null, { createPost })(Postform);