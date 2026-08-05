//Reatividade
//Não modifique o estado diretamente. Utilize sempre a função de
//atualização do estado, pois ela que garante a reatividade dos componentes

import React from "react"


const reatividade = () => {
  const [items, setItems] = React.useState([ 'Item 1', 'Item 2' ])

  const handleClick = () => {
    //Errado! Modifique o estado apenas com a função de atualização
    items.push('Novo Item')
  } 

  const handleClickReativo = () => {
    //Correto! Eu desestruturo o array atual, criando uma nove
    setItems([...items, 'Novo Item'])
  }
  return (
    <div>
     <h1>Vai cagar</h1>

    </div>
  )
}

export default reatividade
