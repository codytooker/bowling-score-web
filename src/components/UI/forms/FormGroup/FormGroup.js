import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormGroup = ({ type, name, label }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Field className="form-control" type={type} id={name} name={name} />
    <ErrorMessage name={name}>
      {msg => <span className="form-error">{msg}</span>}
    </ErrorMessage>
  </div>
);

export default FormGroup;