import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// const tasks = ['take out the trash', 'shovel the driveway', 'walk the Dog'];
// const element = React.createElement('ol', null, 
// tasks.map((task, index) => React.createElement('li', { key: index }, task))
// );

// const element = 
//     <div>
//         <h1>Item Lists</h1>
//         <ol>
//             {tasks.map((task, index) => <li key = { index }> { task }</li>)}
//         </ol>
//     </div>


// Using Components

ReactDOM.render(<Main/>, document.getElementById('root'));