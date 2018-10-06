import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="h-screen flex items-center">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <div className="bg-white rounded py-8 px-4 shadow-lg">
                <h1 class="border-b pb-2 mb-4 text-xl">Login</h1>
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" name="password" />
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