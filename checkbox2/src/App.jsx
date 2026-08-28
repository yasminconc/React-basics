import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

const App = () => {
  const [cores, setCores] = React.useState([])

  const handleChange = ({target}) => {
    if(target.checked) {
      setCores([...cores, target.value])
    }else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <div>
      {coresArray.map((cor, index) => (
        <label key={index} style={{textTransform: 'capitalize'}}>
          <input 
          type="checkbox"
          value={cor}
          checked={cores.includes(cor)}
          onChange={handleChange}
        />
        {cor}
        </label>
      ))}
    </div>
  )
}

export default App
