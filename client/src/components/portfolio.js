import React, { Component } from 'react';

class Portfolio extends Component {
    
    render() { 
        return (  
            <>
                <main className="container p-3 mb-5">
                    {/** The portfolio section was arranged using the Bootstrap grid system.
                         * There are 3 rows. In the first 2 rows there are 2 columns. 
                         * In row 3 there is one column. This adds up to 5 elements.
                         * To house the images, Cards are used.
                    */}
                    <h1 className="headingformats">Portfolio</h1>
                    <h5>Click on the image for the website. Click on the text for the Github</h5>
                    <hr />

                    {/*Row 01*/}
                    <article className="row">
                        {/*Row 01 Column 01*/}
                        <article className="col-sm-6 mt-3 p-3">
                        <article className="card">
                            <a 
                                href="https://lamcnguyen89.github.io/Project-01--The-Electric-Art-Gallery/ " 
                            >
                                <img src={require("../images/The_Electric_Art_Gallery.png")}
                                alt="Electric Art Gallery" 
                                className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">
                            {/*The class myLabel is used to raise the textbox within the card vertically from the bottom so that it is on top of the image.*/}
                            <a href="https://github.com/lamcnguyen89/Project-01--The-Electric-Art-Gallery"><h5 className="bg title">The Electric Art Gallery</h5></a> 
                            </article>
                        </article>
                        </article>
                        {/*End Row 01 Column 01*/}

                        {/*Row 01 Column 02*/}
                        <article className="col-sm-6 mt-3 p-3">
                        <article className="card">
                            <a href="https://lamcnguyen89.github.io/Weather-Dashboard/">
                            <img src={require("../images/Weather_Dashboard.png")}
                            alt="Weather Dashboard"
                            className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">    
                            <a href="https://github.com/lamcnguyen89/Weather-Dashboard"><h5 className="bg title">Personal Weather Dashboard</h5></a>
                            </article>
                        </article>
                        </article>
                        {/*End Row 01 Column 02*/}

                    </article>
                    {/*End Row 01*/}

                    <article className="row">
                        {/*Row 02*/}
                        {/*Row 02 Column 01*/}
                        <article className="col-sm-6">
                        <article className="card">
                            <a href="https://lamcnguyen89.github.io/Daily-Planner/">
                            <img src={require("../images/Daily_Planner.png")}
                            alt="Daily Planner"
                            className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">    
                            <a href="https://github.com/lamcnguyen89/Daily-Planner"><h5 className="bg title">Personal Day Planner</h5></a>
                            </article>
                        </article>
                        </article>
                        {/*End Row 02 Column 01*/}

                        {/*Row 02 Column 02*/}
                        <article className="col-sm-6">
                        <article className="card">
                            <a href="https://gitgudtogether.herokuapp.com/">
                            <img src={require("../images/GitGud_Together.png")}
                            alt="GitGud Together"
                            className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">    
                            <a href="https://github.com/lamcnguyen89/GitGud-Together.git"><h5 className="bg title">GitGud Together Friend Finder</h5></a>
                            </article>
                        </article>
                        </article>
                        {/*End Row 02 Column 02*/}
                    </article>
                    {/*End Row 02*/}

                    {/*Row 03*/}
                    <article className="row">
                        {/*Row 03 Column 01*/}
                        <article className="col-sm-6">
                        <article className="card">
                            <a href="https://drive.google.com/file/d/1ugvaW5thtiSsZuorMnHuIZ-tXupxlqLo/view">
                            <img src={require("../images/MySQL_Employee_Tracker.png")}
                            alt="Employee Tracker"
                            className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">    
                            <a href="https://github.com/lamcnguyen89/Employee-Tracker--MySQL.git"><h5 className="bg title">Node/MySQL Employee Tracker</h5></a>
                            </article>
                        </article>
                        </article>
                        {/*End Row 03 Column 01*/}
                        {/*Row 03 Column 02*/}
                        <article className="col-sm-6">
                        <article className="card">
                            <a href="https://docs.google.com/document/d/18Nd5b1dDCaT2WmdvrvKIUbwAX4N8e-woZa1YV426SuI/edit?usp=sharing">
                            <img src={require("../images/Technical_Documentation.png")}
                            alt="Technical Documentation"
                            className="card-img-top img-fluid" />
                            </a>
                            <article className="card-body myLabel">    
                            <a href="https://github.com/lamcnguyen89/Reverse-Engineering-Code--Sequelize.git"><h5 className="bg title">Technical Documentation</h5></a>
                            </article>
                        </article>
                        </article>
                        {/*End Row 03 Column 02*/}
                    </article>    
                    {/*End Row 03*/}

                </main>
            </>

        );
    }
}
 
export default Portfolio;

