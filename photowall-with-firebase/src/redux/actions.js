// all the action of are app will be declared in this file
import {database} from '../database/config';


export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() =>{  // es6 trick to declare our property ID as a key.
            dispatch(addPost(post));
        }).catch((error) => {
            console.log('Error => ', error);
        });
    };
}

export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => { // .on() means we are always going to listen the changes in our db and .once() means whenever we invoke it, it will just observe our db once
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startRemovingPost(index, id) {
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() => {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function startAddingComment(comment, postId) {
    return (dispatch) => {
        return database.ref('comments/'+postId).push(comment).then(() => {
            dispatch(addComment(comment, postId));    
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function startLoadingComment() {
    return (dispatch) => {
        return database.ref("comments").once('value').then((snapshot) => {
            let comments = {};
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val());
            });
            dispatch(loadComment(comments));
        });
    }
}
// remove Action
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    };
}

// Adding post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    };
}

export function addComment(comment, postId) {
    return {
        type: "ADD_COMMENT",
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function loadComment(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}