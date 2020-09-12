import React, { Component }  from 'react';


class AddPhoto extends  Component {

    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value,
            description = event.target.elements.description.value,
            post = {
                id: Number(new Date()),
                description: description,
                imageLink: imageLink
            }
        if (description && imageLink) {
            this.props.onAddPhoto(post);
        }
    }

    render() { 
        return (
            <div>
                <h1> This is the page where we will add photo </h1>
                <div className='form'>
                    <form onSubmit= {this.handleSubmit}> 
                        <input type="text" placeholder = "Link" name="link"></input>
                        <input type="text" placeholder = "Description" name="description"></input>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;