import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import './form.scss'
import { Schema } from './ValidationSchema'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  })
  const submit = (data) => {
    console.log({ data })
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className=" d-flex flex-column m-2 p-2"
    >
      <TextField
        className="p-2"
        placeholder="Username"
        {...register('username')}
      />
      <p className="helper_text">{errors.username?.message}</p>
      <TextField className="p-2" placeholder="email" {...register('email')} />
      <p className="helper_text">{errors.email?.message}</p>
      <Button variant="outlined" type="submit">
        {' '}
        submit{' '}
      </Button>
    </form>
  )
}

export default Form
