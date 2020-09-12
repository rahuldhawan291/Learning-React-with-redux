// import React, {Component} from 'react';
import React from 'react';


function Photo(props) {
    const post = props.post;
        return <figure className='figure'>  
                    <img className='photo' src={post.imageLink} alt={post.description}/>
                        <figcaption> <p> {post.description} </p></figcaption>
                        <div className='button-container'>
                            <button className='button' onClick= {() => {
                                props.onRemovePhoto(post)
                            }}>Remove</button>
                        </div>
               </figure>
}

// Photo.PropTypes = {
//     post: PropTypes.object.isRequired ,
//     onRemovePhoto: PropTypes.func.isRequired
// }
// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//         console.log(post);
//         return <figure className='figure'>  
//                     <img className='photo' src={post.imageLink} alt={post.description}/>
//                         <figcaption> <p> {post.description} </p></figcaption>
//                         <div className='button-container'>
//                             <button className='remove-button'>Remove</button>
//                         </div>
//                </figure>
//     }
// }

export default Photo; 