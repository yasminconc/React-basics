
// const App = () => {
//   const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']
//   return (
//     <div>
//       <ul>
//         {filmes.map(filme => <li key={filme}>{filme}</li>)}
//       </ul>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const livros = [
//     {nome: 'Game fo Thrones', ano: 1996},
//     {nome: 'Lucifer', ano: 1998},
//     {nome: 'Storm of Swords', ano: 2000},
//   ]
//   return (
//     <div>
//       <ul>
//         {livros
//         .filter(({ano}) => ano >= 1998)
//         .map(({nome, ano}) => (
//           <li key={nome}>{nome}, {ano}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App


//Exercicio


const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000', 
      cores: ['#29d8d5', '#252a34', '#fc3766']
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000', 
      cores: ['#ffd045', '#d4394b', '#f37c59']
    },
    {
      id: 3,
      nome: 'Tablete',
      preco: 'R$ 1500', 
      cores: ['#365069', '#47c1c8', '#f95786']
    },
  ]

  const dados = produtos.filter(
    ({preco}) => Number(preco.replace('R$', '')) > 1500
  )
  return (
    <div>
     {
      dados.map(({id, nome, preco, cores}) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>

          <ul> 
            {
              cores.map((cor) => (
                <li style={{background: cor, color: 'white'}} key={cor}>{cor}</li>
              ))
            }
          </ul>
        </div>
      ))
     }
    </div>
  )
}

export default App