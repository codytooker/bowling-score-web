import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import { Auth, Card } from '../../UI';

const SignUp = () => (
  <Auth>
    <Card title="Sign Up">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field className="form-control" type="text" id="name" name="name" />
              <ErrorMessage name="name">
                {msg => <span className="form-error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field className="form-control" type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {msg => <span className="form-error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field className="form-control" type="password" id="password" name="password" />
              <ErrorMessage name="password">
                {msg => <span className="form-error">{msg}</span>}
              </ErrorMessage>
            </div>
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

const handleSubmit = (values, actions) => {
  axios.post('http://bowling-score.test/api/auth/register', values)
    .then(res => {
      actions.setSubmitting(false);
      console.log(res);
    })
    .catch(error => {
      actions.setSubmitting(false);
      actions.setErrors(error.response.data.errors);
    })
}

export default SignUp;
