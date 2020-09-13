import React, {Component} from 'react';
import photo from './Photo';
import Photo from './Photo';
import Comments from './Comment';

class Single extends Component {
    render() {

        // this.prop.comments
        const {match, posts} = this.props, 
            id = Number(match.params.id),
            post = posts.find((post) => post.id === id),
            comments = this.props.comments[id] || [],
            index = this.props.posts.findIndex((post) => post.id === id);
        return <div className='single-photo'>
            <Photo post={post} {...this.props} index={index}/>
            <Comments addComment = {this.props.addComment} comments={comments} id={id}/>
        </div>
    }
}

export default Single;