// all the action of are app will be declared in this file

// remove Action

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    };
}

// Adding post
export function addPost(index, imageLink, description) {
    return {
        type: 'ADD_POST',
        index,
        imageLink,
        description
    };
}