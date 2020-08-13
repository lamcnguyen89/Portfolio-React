import React, { Component } from 'react';

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
                                    src="assets/images/Lam_Profile.jpg" 
                                    alt="Profile of man named Lam Nguyen" 
                                    className="aboutImg mr-4 mb-4" 
                                    width="200px" 
                                    height="200px" 
                                />
                                <p>
                                    My name is Lam Nguyen. I graduated with a Bachelors in Environmental Engineering and a minor in Bioengineering. About a year or two... or three... before graduating college, I realized I didn't know anything about well...anything. 
                                </p>
                                <p>
                                    So after finally getting out of school, the real education began. Through various stages of life in the military, as a manufacturing engineer, organic farming startups, as an engineer in a biotech company, and doing sales in a startup health food company, I learned the hard technical skills of the economy: fighting, selling, growing food in a sustainable manner, building stuff, and creating companies from the ground up. I got my hands dirty in all forms... It was great and awful at the same time. 
                                </p>
                                <p>
                                    As of 2020, the world has been going through some strange and seismic shifts on alot of levels. I guess it's time to use all this knowledge and wisdom for productive purposes and for me to stop being a student... And it seems that the best way to do this is through the field of Computing, and Entrepreneurship. 
                                </p>
                                <p>
                                    Email: lamcnguyen89@gmail.com<br />
                                    Contact Number: 407-925-3877<br />
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