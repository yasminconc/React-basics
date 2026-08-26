import React from 'react'
import Input from './Input'

const formFields = [
	{ id: 'nome', label: 'Nome', type: 'text' },
	{ id: 'email', label: 'Email', type: 'email' },
	{ id: 'senha', label: 'Senha', type: 'password' },
	{ id: 'cep', label: 'CEP', type: 'text' },
	{ id: 'rua', label: 'Rua', type: 'text' },
	{ id: 'numero', label: 'Número', type: 'text' },
	{ id: 'bairro', label: 'Bairro', type: 'text' },
	{ id: 'cidade', label: 'Cidade', type: 'text' },
	{ id: 'estado', label: 'Estado', type: 'text' }
]

const App = () => {
	const [form, setForm] = React.useState(
		formFields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
	)

	const [response, setResponse] = React.useState(null)

	const handleChange = ({ target }) => {
		const { id, value } = target
		setForm({ ...form, [id]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const res = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		})

		if (res.ok) {
			setResponse('Usuário cadastrado com sucesso1')
		} else {
			setResponse('Erro ao cadastrar usuário')
		}
	}

	return (
		<form onSubmit={handleSubmit} style={{ padding: '20px' }}>
			{formFields.map(({ id, label, type }) => (
				<Input
					key={id}
					id={id}
					label={label}
					type={type}
					value={form[id]}
					onChange={handleChange}
				/>
			))}

			<button type='submit'>Enviar</button>
			{response && <p>{response}</p>}
		</form>
	)
}

export default App
