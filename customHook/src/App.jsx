import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  const handleClick = ({target}) => {
    setProduto(target.innerText)
  }

  return (
    <div>
      <p>Produto preferido:{produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  )
}

export default App
