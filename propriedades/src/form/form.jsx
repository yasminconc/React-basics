import React from 'react'
import Button from './button'
import Input from './input'

const Form = () => {
  return (
    <form>
      <Input id='email' label='Email' required/>
      <Input id='senha' label='Senha' type='password'/>
      <Button/>
    </form>
  )
}

export default Form
