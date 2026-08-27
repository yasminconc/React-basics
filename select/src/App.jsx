import React from 'react'

const App = () => {
  const [select, setSelect] = React.useState()

  return (
    <form>
      <select 
        value={select} 
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
      
      <option disabled value=""></option>
      <option value="notebook">Notebook</option>
      <option value="smartphone">Smartphone</option>
      <option value="tablet">Tablete</option>

      </select>
    </form>
  )
}

export default App
