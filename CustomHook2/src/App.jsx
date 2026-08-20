import React from 'react'
import { useLocalStorage } from './hook/useLocalStorage'
import UseFetch from './useFetch'

const App = () => {
	const [produto, setProduto] = useLocalStorage('produto', '')
	const { request, data, loading, error } = UseFetch()

	React.useEffect(() => {
		const fetchData = async () => {
			const { response, json } = await request(
				'https://ranekapi.origamid.dev/json/api/produto/'
			)
		}

		fetchData()
	}, [])

	const handleClick = ({ target }) => {
		setProduto(target.innerText)
	}

	return (
		<div>
			<p>Produto preferido:{produto}</p>
			<button onClick={handleClick}>Notebook</button>
			<button onClick={handleClick}>Smartphone</button>

			{loading && <p>Carregando..</p>}
			{error && <p>Erro: {error}</p>}

			{!loading &&
				data &&
				data.map((produto) => (
					<div key={produto.id}>
						<h1>{produto.nome}</h1>
					</div>
				))}
		</div>
	)
}

export default App
