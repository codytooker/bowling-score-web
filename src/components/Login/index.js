import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://bowling-score.test/api/auth/login', this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log('error ', error);
      })

    console.log('the form was submitted: ' + this.state.email);
  }

  render() {
    return (
      <div className="h-screen flex items-center">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <div className="bg-white rounded py-6 px-4 shadow-lg">
                <h1 className="border-b pb-2 mb-6 text-xl">Login</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange} />
                  </div>
                  <div className="form-group mb-0">
                    <button action="submit" className="btn btn--blue">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;