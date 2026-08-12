import React from 'react'

const operacaoLenta = () => {
  let c
  for (let i = 0; i < 10000000; i ++){
    c = i + i / 10
  }
}

const App = () => {
  const [contar, setContar] = React.useState(0)

  const t1 = performance.now()

  const valor = React.useMemo(() => peracaoLenta(), [])
  // console.log(valor);
  console.log(performance.now() - t1);
  
  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default App
