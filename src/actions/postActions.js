import { FETCH_POSTS, NEW_POST } from './types';


// dispatch - like resolve/reject in a promise
// this fetchPosts() returns a function that takes dispatch as it's argument
export const fetchPosts = () => dispatch => {
    console.log('fetching posts');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            dispatch({ 
                type: FETCH_POSTS,
                payload: posts
            });
        });
}

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(newPost => (
            dispatch({
                type: NEW_POST,
                payload: newPost
            })
        ));
}