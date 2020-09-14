import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Photo from './Photo';

function PhotoWall(props) {
    return <div>
                <Link className='addIcon' to = '/addPhoto'></Link>
                 <div className='photoGrid'> 
                    {props.posts
                    .sort(function(x,y){
                        return y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
                </div>
            </div>
}

PhotoWall.prototype = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;