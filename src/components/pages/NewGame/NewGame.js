import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { FormGroup } from '../../UI/forms';
import { Card } from '../../UI';
import { createGame } from '../../../actions/game';

class NewGame extends Component {
  onSubmit = (values, actions) => {
    this.props.createGame(values)
      .then(res => {
        this.props.history.push('/games');
      })
      .catch(error => {
        actions.setSubmitting(false);
        actions.setErrors(error.response.data.errors);
      })
  }

  render() {
    return (
      <DefaultLayout>
        <h1 className="text-center text-white">Create New Game</h1>
        <Card title="New Game">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <FormGroup type="text" name="title" label="Game Title" />
                <div className="form-group mb-0">
                  <button type="submit" className="btn btn--blue" disabled={isSubmitting}>Create</button>
                </div>
              </Form>
            )}
          </Formik>
        </Card>
      </DefaultLayout>
    );
  }
}

const initialValues = {
  title: '',
};

const validationSchema = (
  Yup.object({
    title: Yup.string().required('Required'),
  })
);

export default connect(null, { createGame })(NewGame);