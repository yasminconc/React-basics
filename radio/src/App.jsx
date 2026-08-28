import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('')

  const handleChange = ({ target }) => {
    setProduto(target.value)
  }

  return (
    <div>
      {produto}
      <label>
        <input 
          type="radio" 
          value='smartphone' 
          name='produto' 
          onChange={handleChange}
          // Ou checked={produto === 'smartphone'}
        />
        Smartphone
      </label>

      <label>
        <input 
          type="radio" 
          value='notebook' 
          name='produto' 
          onChange={handleChange}
        />
        Notebook
      </label>
    </div>
  )
}

export default App
