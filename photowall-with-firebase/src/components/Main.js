import React, {Component} from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
import Single from './Single';

class Main extends Component {

    state = { loading: true}

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false});
        });
        this.props.startLoadingComment();
    }
    render () {
        console.log('this.props', this.props);
        return (
                <div> 
                    <h1>
                        <Link to='/'> Photowall </Link>
                    </h1>
                    <Route exact path = '/' render = {(params) => (
                        <div>
                            <PhotoWall {...this.props} {...params}/>
                        </div> 
                    ) } />
 
                    <Route path = '/AddPhoto' render={({history}) => (
                        <AddPhoto {...this.props} onHistory={history}/>
                    )} />

                    <Route path='/single/:id' render = {(params) => (
                        <Single loading={this.state.loading} {...this.props} {...params}/>
                    )}/>
                </div>
                )
    }

}

export default Main