import { useBoolean } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useBoolean();

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        navigationMenu,
        setNavigationMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
