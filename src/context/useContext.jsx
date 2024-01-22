import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

//funcion corta para exportar el context
export const useAuth = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppProvider = ({ children }) => {
  const [inputPrivadosSeleccionados , setinputPrivadosSeleccionados] = useState(false)
 
  return (
    <AppContext.Provider
      value={{
        inputPrivadosSeleccionados,
        setinputPrivadosSeleccionados,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
