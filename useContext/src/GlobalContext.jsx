import React from "react"

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
  const [contar, setContar] = React.useState(0)

  const adiciona1 = () => {
    setContar((contar => contar + 1))
  }
  const adiciona2 = () => {
    setContar((contar => contar + 2))
  }

  return (
    <GlobalContext.Provider value={{contar, adiciona1, adiciona2}}>
      {children}
    </GlobalContext.Provider>
  );
};


