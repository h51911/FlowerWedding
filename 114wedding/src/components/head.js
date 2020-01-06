import React from 'react';
import '../css/head/head.scss';


function Head(props) {
    return (
        <div className="head">

            <p>{props.title}</p>
        </div>
    );
}

export default Head;