import React from 'react';
import Card from './Card';
import {comments} from './commentData';

function App() {
    const Cards = comments.map(comment =>{return <Card commentObject={comment}/>});
    return (
        <div>
            {Cards}
        </div>
    )
}
export default App;