import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'

const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Yasmin', idade: '23'})
  const [modal, setModal] = React.useState(false)

  const handleClick = () => {
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Possui faculdade'})
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo? 'Ativo' : 'Inativo'}</button>

      <br/>

      <div>
        <Modal modal={modal} setModal={setModal}/>
        <ButtonModal setModal={setModal}/>
      </div>

    </div>
  )
}

export default App
