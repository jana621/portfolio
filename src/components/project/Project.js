import "./project.css";

import React from 'react'

const Project = () => {
    return (
        <div className="project">
            <h1 className="project-title">Projects</h1>
            <h3 className="project-title-sub">A glance of my projects</h3>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <h3>
                            PAN Update Form
                        </h3>
                    </div>
                    <div className="center">A PAN Card Update Form using Html and
                        Css, where users can add details and submit to update PAN Card form.</div>
                    <div className="bottom">
                        <a href="https://lucent-jalebi-6a84e8.netlify.app" target="_blank" rel="noreferrer" className="a-tag">
                            <button className="view-project">View</button>
                        </a>

                        <a href="https://github.com/jana621/PAN-Form" target="_blank" rel="noreferrer" className="a-tag">
                            <button style={{marginLeft:"10px"}} className="view-project">Code</button>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="top">
                        <h3>
                            Rest API
                        </h3>
                    </div>
                    <div className="center">An API - (Thirukkural) built in DOM where users can get all thirukkural
                        in tamil, english and its meaning.</div>
                    <div className="bottom">
                        <a href="https://peaceful-mandazi-5cff6f.netlify.app" target="_blank" rel="noreferrer" className="a-tag">
                            <button className="view-project">View</button>
                        </a>

                        <a href="https://github.com/jana621/Rest-API-Thirukkural" target="_blank" rel="noreferrer" className="a-tag">
                            <button style={{marginLeft:"10px"}} className="view-project">Code</button>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="top">
                        <h3>
                            Tic-Tac-Toe
                        </h3>
                    </div>
                    <div className="center">Tic-Tac-Toe game built in React.js with
                        functions, grid, useState, components, algorithms and Confetti.</div>
                    <div className="bottom">
                        <a href="https://zesty-zabaione-6bcb25.netlify.app" target="_blank" rel="noreferrer" className="a-tag">
                            <button className="view-project">View</button>
                        </a>

                        <a href="https://github.com/jana621/Tic-Tac-Toe" target="_blank" rel="noreferrer" className="a-tag">
                            <button style={{marginLeft:"10px"}} className="view-project">Code</button>
                        </a>
                    </div>
                </div>

                <div className="card">
                    <div className="top">
                        <h3>
                            Social Media App
                        </h3>
                    </div>
                    <div className="center">MERN Social Media application using
                        React.js, Node.js and MongoDB with Mongoose, Hooks, Context and more.</div>
                    <div className="bottom">
                        <a href="https://glistening-frangollo-340442.netlify.app" target="_blank" rel="noreferrer" className="a-tag">
                            <button className="view-project">View</button>
                        </a>

                        <a href="https://github.com/jana621/social-media" target="_blank" rel="noreferrer" className="a-tag">
                            <button style={{marginLeft:"10px"}} className="view-project">Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project