import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


class Login extends React.Component {

    render () {
        return (
            <html>
                <header>
                    <div id="head">
                    <h1 id="headp">LINK2RSVP</h1>
                    <Button variant="light">
                        sign up
                    </Button>
                    </div>
                   
                    
                    </header>
            <div id="signin">
                <h3 id="wel">Welcome to The Party</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Please Enter an Email address</Form.Label>
                        <Form.Control id="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Please Enter your Password</Form.Label>
                        <Form.Control id="pass" type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Button id="signinbutton" variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
            </html>
        );
    }
 }

export default Login;