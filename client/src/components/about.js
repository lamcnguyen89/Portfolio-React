import React, { Component } from 'react';
import profile from "../images/Lam_Profile.jpg"

class About extends Component {
    
    render() { 
        return ( 
            
            <>
            
                <main className="container p-2 my-4">
                    <h1 className="headingformats">About Me</h1>
                    <hr />
                    <article className="row">
                        <article className="col-12 mt-3 p-3">
                    
                            <article>
                                <img 
                                    src={profile}
                                    alt="Profile of man named Lam Nguyen" 
                                    className="aboutImg mr-4 mb-4" 
                                    width="200px" 
                                    height="200px" 
                                />
                                <p> Hello! My name is Lam Nguyen.
                                    I'm a Web Developer with skills in Machine Learning/ Artificial Intelligence. <br /> 
                                    Check my Portfolio out!<br />
                                    <hr />
                                    <a href="https://github.com/lamcnguyen89" target="_blank">Visit my Github</a><br />
                                    <a href="http://www.linkedin.com/in/lamcnguyen89" target="_blank">Visit my LinkedIn Profile</a><br />
                                    <a href="https://drive.google.com/file/d/147rg_ZnJoThDnWRMXupbUYjnQk-vhjoe/view?usp=sharing" target="_blank">View my Resume</a>
                                </p>
                                
                            </article> 
                        </article>
                    </article>
                </main>
            </>

            

         );
    }
}
 
export default About;