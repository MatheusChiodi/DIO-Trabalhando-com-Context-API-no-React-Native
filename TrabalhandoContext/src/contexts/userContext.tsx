import React, { createContext, useState } from 'react';

//tipagem
interface UserContextProps {
  nome: string;
}

//contexto de usuario
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

//criando o provider
export default function UserContextProvider({ children }: any) {
  const contextValue = { nome: 'Matheus Chiodi' };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
