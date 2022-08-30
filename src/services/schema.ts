import * as Yup from 'yup'

export const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Nome muito curto')
    .required('Esse campo é obrigatório'),
  lastName: Yup.string()
    .min(2, 'Nome muito curto')
    .required('Esse campo é obrigatório'),
  email: Yup.string()
    .email('Email invalido')
    .required('Esse campo é obrigatório'),
  age: Yup.number().min(18, 'A idade mínima para inscrição é 18 anos')
})
