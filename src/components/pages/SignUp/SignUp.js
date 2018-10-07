import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { Auth, Card } from '../../UI';
import { FormGroup } from '../../UI/forms';
import * as actions from '../../../actions';

class SignUp extends Component {
  onSubmit = (values, actions) => {
    this.props.signup(values)
      .then(res => {
        actions.setSubmitting(false);
        console.log(res);
      })
      .catch(error => {
        actions.setSubmitting(false);
        actions.setErrors(error.response.data.errors);
      })
  }

  render() {
    return (
      <Auth>
        <Card title="Sign Up">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <FormGroup type="text" name="name" label="Name" />
                <FormGroup type="email" name="email" label="Email" />
                <FormGroup type="password" name="password" label="Password" />
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn--blue" disabled={isSubmitting}>Sign Up</button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
        <p className="text-center py-6">Already a member <Link to="/login">Click Here</Link> to Login</p>
      </Auth>
    );
  }
};

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = (
  Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email!').required('Required'),
    password: Yup.string().required('Required'),
  })
);

export default connect(null, actions)(SignUp);
