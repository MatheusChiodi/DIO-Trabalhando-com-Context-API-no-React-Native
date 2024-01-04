import React, { createContext, useState } from 'react';

//contexto de usuario
export const UserContext = createContext({});

//criando o provider
export default function UserContextProvider({ children }: any) {
  const contextValue = { nome: 'Matheus Chiodi' };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
