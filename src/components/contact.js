import React, { Component } from 'react';
import Axios from 'axios';

class Contact extends Component {
    constructor(props) {
        // Remember that super() is called inside a react componnt only if it has a constructor. 
        // super(props) allows access to this.props in the constructor
        // Source: https://hackernoon.com/setting-up-a-serverless-contact-form-in-react-using-nodemailer-and-express-19df9fdb20ed
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Send Message'
        }
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...Sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        Axios.post('API_URI', data)
            .then(res =>{
                this.setState({sent:true}, this.resetForm())
            })
            .catch(()=>{
                console.log('Message not sent')
            })

    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    render() { 
        return (  
            <>
                {/* This section contains the html for the contact form. 
                The formatting for this form was taken off Bootstrap. */}
                <main className="container p-2 my-4">
                
                    <h1 className="headingformats">Contact Me</h1>
                    <hr />
                        
                        <article className="row justify-content-center">
                            <article className="col-sm-12">
                                <form
                                    id="contact-form"
                                    onSubmit = {(e) => this.formSubmit(e)}
                                >
                                    <article className="form-group">
                                        <label htmlFor="formGroupExampleInput">Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" id="formGroupExampleInput" 
                                            placeholder="First Name and Last Name"
                                            value={this.state.name} 
                                            onChange={e => this.setState({name: e.target.value})}
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" id="formGroupExampleInput2" placeholder="Example@gmail.com"
                                            value={this.state.email} 
                                            onChange={e => this.setState({email: e.target.value})} 
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea 
                                            className="form-control" id="exampleFormControlTextarea1" 
                                            rows={5} 
                                            placeholder="Enter your message here." defaultValue={""}
                                            value={this.state.message} 
                                            onChange={e => this.setState({message: e.target.value})} 
                                        />
                                    </article>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary mb-2"
                                    >
                                        {this.state.buttonText}
                                    </button>
                                </form>
                            </article>
                        </article>

                        <article className="row justify-content-center mt-3">
                            <article className="col-sm-12">
                                <p>
                                    My name: Lam C Nguyen<br />
                                    Email: lamcnguyen89@gmail.com<br />
                                    Contact Number: 407-925-3877<br />
                                    <a href="https://github.com/lamcnguyen89">Visit my Github</a><br />
                                    <a href="http://www.linkedin.com/in/lamcnguyen89">Visit my LinkedIn Profile</a><br />
                                    <a href="https://drive.google.com/file/d/147rg_ZnJoThDnWRMXupbUYjnQk-vhjoe/view?usp=sharing">View my Resume</a>
                                </p>
                            </article>
                        </article> 
                </main>
            </>
        );
    }
}
 
export default Contact;