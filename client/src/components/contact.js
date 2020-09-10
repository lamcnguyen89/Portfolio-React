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
            message: ''
            
        }
    }

    formSubmit(e){
        e.preventDefault();

        console.log(this.state);

        Axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data: this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }
        

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: ''
            
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
                                    method="POST"
                                >
                                    <article className="form-group">
                                        <label htmlFor="name-input">Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="name-input" 
                                            placeholder="First Name and Last Name"
                                            name="name"
                                            value={this.state.name} 
                                            onChange={e => this.setState({name: e.target.value})}
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="email-input">Email</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="email-input" 
                                            placeholder="Example@gmail.com"
                                            name="email"
                                            value={this.state.email} 
                                            onChange={e => this.setState({email: e.target.value})} 
                                        />
                                    </article>
                                    <article className="form-group">
                                        <label htmlFor="message-input">Message</label>
                                        <textarea 
                                            className="form-control" 
                                            id="message-input" 
                                            type="text"
                                            rows={5} 
                                            placeholder="Enter your message here."
                                            name="message"
                                            value={this.state.message} 
                                            onChange={e => this.setState({message: e.target.value})} 
                                        />
                                    </article>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary mb-2"
                                    >
                                        Submit Message
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