import React from 'react';
import { FaBars } from 'react-icons/fa';

const bars = (props) => {
    
    return (
        <FaBars className="home__bars" onClick={props.click}/>
    );
}
 
export default bars;