import { Formik, Field, Form, FormikHelpers } from 'formik'
import { CardInfoType } from '../../@types'
import { schema } from '../../services/schema'

import './styles.scss'

export function FormContainer() {
  function handleSubmit(values: CardInfoType) {
    console.log(values)
  }

  return (
    <aside className="container">
      <h1 className="title">Input</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          age: 0
        }}
        validationSchema={schema}
        onSubmit={(
          values: CardInfoType,
          { setSubmitting }: FormikHelpers<CardInfoType>
        ) => {
          handleSubmit(values)
          setSubmitting(false)
        }}
      >
        {() => (
          <Form className="form">
            <Field className="textInput" type="text" name="firstName" />

            <Field className="textInput" type="text" name="lastName" />

            <Field className="textInput" type="email" name="email" />

            <Field type="number" name="age" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </aside>
  )
}
