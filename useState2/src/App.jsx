import React from 'react'
import Modal from './Modal'
import ButtonModal from './ButtonModal'

const App = () => {
  // const [modal, setModal] = React.useState(false)
  // let [items, setItems] = React.useState('Teste')

  // const handleClick = () => {
  //   setItems('Outro')
  // }

  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(['Item 1'])

  const handleClick = () => {
    setContar(contar + 1)
    setItems([...items, 'Item' + (contar + 1)])
  }
  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
      {/* <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/> */}
    </div>
  )
}

export default App


