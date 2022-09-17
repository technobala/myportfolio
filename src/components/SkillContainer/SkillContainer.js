import React from 'react';
import { Element } from 'react-scroll';
import skillimg from '../../assets/skill.jpg';
import LinearProgess from '@material-ui/core/LinearProgress';
import './SkillContainer.css';

function SkillContainer(){
    return(
        <Element name="skills" className="skillContainer">
            <div className="skillContainer__image">
                <img src={skillimg} alt=""/>
            </div>
            <div className="skillContainer__text">
                <h2>Skill Set</h2>
                <div className="skillContainer__skillSet">
                    <h5>React</h5>
                    <div className="skillContainer__slider skillContainer__slider1">
                        <LinearProgess varient="determinate" value={90}/> 
                    </div>
                </div>
                <div className="skillContainer__skillSet">
                    <h5>JavaScript</h5>
                    <div className="skillContainer__slider skillContainer__slider2">
                        <LinearProgess varient="determinate" value={70}/> 
                    </div>
                </div>
                <div className="skillContainer__skillSet">
                    <h5>HTML</h5>
                    <div className="skillContainer__slider skillContainer__slider3">
                        <LinearProgess varient="determinate" value={90}/> 
                    </div>
                </div>
                <div className="skillContainer__skillSet">
                    <h5>CSS</h5>
                    <div className="skillContainer__slider skillContainer__slider4">
                        <LinearProgess varient="determinate" value={90}/> 
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default SkillContainer;