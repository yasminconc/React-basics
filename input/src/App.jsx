import React from 'react'

const App = () => {
	// const [nome, setNome] = React.useState('')
  // const [email, setEmail] = React.useState('')
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log(event)
    
  // }

  const handleChange = ({target}) => {
    const [id, value] = target
    setForm({ ...form, [id]: value })

  }

	return (
		<form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
			<input 
        id='nome'
        type='text' 
        value={form.nome} 
        name='nome'
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
			<input 
        id='email'
        type='email' 
        value={form.email} 
        name='email'
        onChange={handleChange}
      />
      

      <button>Enviar</button>
		</form>
	)
}

export default App
