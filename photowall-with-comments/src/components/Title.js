// import React, {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';


function Title(props) {
    return <h1>{props.title}</h1>
}

Title.prototype = {
    title: PropTypes.string.isRequired
}

export default Title
