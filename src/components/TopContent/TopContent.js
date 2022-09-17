import React from 'react';
import './TopContent.css';

function TopContent(){
    return(
        <div className="topContent">
            <div className="topContent__container">
                <h1>Mr.Balasubramanian</h1>
                <p>FrontEnd Developer</p>
                <a href="#">
                    <button className="topContent__downloadbutton">Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default TopContent;