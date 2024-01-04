import React, { createContext, useState } from 'react';

//contexto de usuario
export const UserContext = createContext({});

//criando o provider
export default function UserContextProvider({ children }: any) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
