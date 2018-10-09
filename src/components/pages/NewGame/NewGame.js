import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FormGroup } from '../../UI/forms';
import { Card } from '../../UI';

class NewGame extends Component {
  onSubmit = (values, actions) => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center text-white">Create New Game</h1>
          <Card title="New Game">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
              {({ isSubmitting }) => (
                <Form>
                  <FormGroup type="text" name="name" label="Game Title" />
                  <div className="form-group mb-0">
                    <button type="submit" className="btn btn--blue" disabled={isSubmitting}>Create</button>
                  </div>
                </Form>
              )}
            </Formik>
          </Card>
        </div>
      </div>
    );
  }
}

const initialValues = {
  name: '',
};

const validationSchema = (
  Yup.object({
    name: Yup.string().required('Required'),
  })
);

export default NewGame;