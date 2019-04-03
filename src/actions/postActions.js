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

export const newPost = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/post')
        .then(res => res.json())
        .then(post => {
            dispatch({ 
                type: NEW_POST,
                payload: post
            });
        });
}