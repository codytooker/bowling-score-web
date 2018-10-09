import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Auth, Card } from '../../UI';
import { FormGroup } from '../../UI/forms';
import { login } from '../../../actions/auth';

class Login extends Component {
  onSubmit = (values, actions) => {
    this.props.login(values)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {
        actions.setSubmitting(false);
        actions.setErrors(error.response.data.errors);
      })
  }

  render() {
    return (
      <Auth>
        <Card title="Login">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <FormGroup type="email" name="email" label="Email" />
                <FormGroup type="password" name="password" label="Password" />
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn--blue" disabled={isSubmitting}>Login</button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
        <p className="text-center py-6">Or <Link to="/signup">Click Here</Link> to Sign UP</p>
      </Auth>
    );
  }
};

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = (
  Yup.object({
    email: Yup.string().email('Invalid email!').required('Required'),
    password: Yup.string().required('Required'),
  })
);

export default connect(null, { login })(Login);
