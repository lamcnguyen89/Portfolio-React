import React, { Component } from 'react';
import Navbar from "./nav";
import Footer from "./footer";

class Contact extends Component {
    render() { 
        return (  
            <>
                <Navbar />

                {/* This section contains the html for the contact form. 
                The formatting for this form was taken off Bootstrap. */}
                <main className="container p-2 my-4">
                
                    <h1 className="headingformats">Contact Me</h1>
                    <hr />
                        
                        <article className="row justify-content-center">
                            <article className="col-sm-12">
                                <form>
                                    <article className="form-group">
                                        <label htmlFor="formGroupExampleInput">Name</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First Name and Last Name" />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Email</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example@gmail.com" />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Enter your message here." defaultValue={""} />
                                    </article>
                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                </form>
                            </article>
                        </article>

                        <article className="row justify-content-center mt-3">
                            <article className="col-sm-12">
                                <p>
                                    My name: Lam C Nguyen<br />
                                    Email: lamcnguyen89@gmail.com<br />
                                    Contact Number: 407-925-3877<br />
                                    <a href="https://github.com/lamcnguyen89" target="_blank">Visit my Github</a><br />
                                    <a href="http://www.linkedin.com/in/lamcnguyen89" target="_blank">Visit my LinkedIn Profile</a><br />
                                    <a href="https://drive.google.com/file/d/147rg_ZnJoThDnWRMXupbUYjnQk-vhjoe/view?usp=sharing" target="_blank">View my Resume</a>
                                </p>
                            </article>
                        </article> 
                </main>

                <Footer />
            </>
        );
    }
}
 
export default Contact;