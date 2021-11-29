import React from "react";
import pfp from "../images/pug.jpg"

function Heading() {
    
    return <div>
        <div className="heading">
            <img src={pfp} alt="Me" className="pfp"/>
            <div className="aboutMe">
                <h1>Computer Software Engineer</h1>
                <h2>About me</h2>
                <p>My name is Joshua Sorby, I'm a Full-stack software Engineer. Having started my journey into learning how to code back at the
                    beginning of 2020, I now have roughly two years of experience of learning how to develop code. My love of solving puzzles
                    and finding patterns worked as a great vessel to take me into the world of software development and I couldn't be more suited
                    to any other career.
                    <br/><br/>
                    Having gone through Thinkful's Software Engineering Bootcamp, I have created many projects and am finding my place in the
                    industry. Particulary, building React applications has been the greatest success coming out of the bootcamp. I am continuing 
                    to work on new personal projects as I further my knowledge and improve my mastery of React, JS, HTML and CSS.
                </p>
            </div>
        </div>
        <hr />
    </div>
}

export default Heading;
