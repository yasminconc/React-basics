

// const Titulo = ({cor, texto, children}) => {
//   return <h1 style={{color: cor}}>{texto}, {children}</h1>
// }

import Form from "./form/form"
import Header from "./Header"
import Home from "./home"
import Produtos from "./Produtos"

const App = () => {

  let Pagina

  const {pathname} = window.location

  if (pathname === '/produtos') {
    Pagina = Produtos
  }else {
    Pagina = Home
  }
 
  return (
    <div className="home">
      {/* <Titulo cor='red' texto='Estoy qui'>
        isso é o children
      </Titulo> */}

      {/* <Form/> */}

     <Header/>
     <Pagina/>
    
    </div>
  )
}

export default App
