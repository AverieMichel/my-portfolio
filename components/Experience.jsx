import React from "react";

function Experience(){
    return (
    <div className="skills">
        <div style={{ gridArea: " 1 / 1 / 2 / 2" , justifySelf: 'end' }}>
            <h3>Roles I would LOVE</h3>
            <ul>
                <li>Help Desk</li>
                <li>QA</li>
                <li>Test Engineering</li>
                <li>Full-Stack Development</li>
            </ul> 
        </div>

        <div style={{ gridArea: "1 / 3 / 2 / 3", justifySelf: 'start' }}>
            <h3>Soft Skills</h3>
            <ul>
                <li>Problem-Solving </li>
                <li>Team Collaboration</li>
                <li>Client Communication</li>
                <li>Adaptability</li>
                <li>Self-Discipline</li>
            </ul> 
        </div>
        <div style={{ gridArea: "2 / 1 / 2 / 4", justifySelf: 'center' }}>
            <h3>Professional Experience</h3>
                <ul>
                <li>Delivered exceptional customer experiences by managing 50+ repeat clients.</li>
                <li>Operated as an independent contractor, developing time management and organizational skills.</li>
                <li>Built strong client trust through communication and attention to detail.</li>
            </ul>
        </div>

    </div>
    )
}

export default Experience;


        {/* <img src="/images/PNG image-D3AB4FCC421F-1.png" width={300}></img> */}