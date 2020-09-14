import React, {Component} from 'react';
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
            if (this.props.loading === true) {
                return <div className="loader">...loading</div>
            }
            else if (post) {
                return <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments startAddingComment = {this.props.startAddingComment} comments={comments} id={id}/>
                </div>
            } else {
                return <h1>... no posts found</h1>
            }
        
    }
}

export default Single;