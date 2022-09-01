import { Formik, Field, Form, FormikHelpers } from 'formik'
import { schema } from '../../services/schema'

import { useDispatch, useSelector } from 'react-redux'
import { add, useCards } from '../../store/cardsSlice'

import { CardInfoType } from '../../@types'

import './styles.scss'

export function FormContainer() {
  const cards = useSelector(useCards)

  const dispatch = useDispatch()

  function handleSubmit(values: CardInfoType) {
    console.log(values)
    dispatch(add(values))
    console.log(cards)
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
            <Field type="number" name="age" />

            <button type="submit">Criar</button>
          </Form>
        )}
      </Formik>
    </aside>
  )
}
