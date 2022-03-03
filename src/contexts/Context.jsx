import { useBoolean, useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useBoolean();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        navigationMenu,
        setNavigationMenu,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
