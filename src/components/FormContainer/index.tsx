import { Formik, Field, Form, FormikHelpers } from 'formik'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { add, useCards } from '../../store/cardsSlice'

import { CardInfoType } from '../../@types'
import { schema } from '../../services/schema'

import './styles.scss'

export function FormContainer() {
  const dispatch = useAppDispatch()

  function handleSubmit(values: CardInfoType) {
    dispatch(add(values))
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
            <label className="label">Primeiro nome:</label>
            <Field className="textInput" type="text" name="firstName" />

            <label className="label">Sobrenome:</label>
            <Field className="textInput" type="text" name="lastName" />

            <label className="label">E-mail:</label>
            <Field className="textInput" type="email" name="email" />

            <label className="label">Idade:</label>
            <Field className="numberInput" type="number" name="age" min="1" />

            <button type="submit">Criar</button>
          </Form>
        )}
      </Formik>
    </aside>
  )
}
