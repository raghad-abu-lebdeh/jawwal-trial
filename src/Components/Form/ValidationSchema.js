import * as yup from 'yup'

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4]/

export const Schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email('invalid email').required(),
})
