import React from 'react'

const Produto = () => {
  React.useEffect(() => {
    const handleScroll = (event) => {
      console.log(event) 
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <div style={{height: '200vh'}}>
      <p>Meu produto</p>
    </div>
  )
}

export default Produto
