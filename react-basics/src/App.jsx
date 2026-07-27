//Mostre os dados da aplicação, como apresentado no vídeo
//Não utilize Css externo, use o style para mudar as cores
//se a situação estiver ativa pinte de verde, inativa vermelho
//Se o gasto for maior que 10000 mostre uma mensagem.

const luana = {
  client: 'Luana',
  idade: 27,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'}
  ],
  ativa: true
}

const mario = {
  client: 'Mario',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'}
  ],
  ativa: false
}

const App = () => {
  const dados = mario

  const total = dados.compras.map((item) => 
    Number(item.preco.replace('R$ ',''))).reduce((a, b) => a + b)


  return (
    <div>
      <p>Nome: {dados.client}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
      <p>Total gasto: R$ {total}</p>
      <p>{total > 10000 && 'Você está gastando muito'}</p>
    </div>
  )
}

export default App
