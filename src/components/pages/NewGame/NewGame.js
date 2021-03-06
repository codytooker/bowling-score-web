import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { DefaultLayout } from '../../UI/Layouts';
import { FormGroup } from '../../UI/forms';
import { Heading } from '../../UI/elements';
import { Card } from '../../UI';
import { createGame } from '../../../actions/game';

class NewGame extends Component {
  onSubmit = (values, actions) => {
    this.props.createGame(values)
      .then(() => {
        this.props.history.push('/games');
      })
      .catch((error) => {
        actions.setSubmitting(false);
        actions.setErrors(error.response.data.errors);
      });
  }

  render() {
    return (
      <DefaultLayout>
        <Heading className="mb-8">Create New Game</Heading>
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
    title: Yup.string().min(6).required('Required'),
  })
);

export default connect(null, { createGame })(NewGame);
