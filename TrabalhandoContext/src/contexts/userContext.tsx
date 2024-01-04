import React, { createContext, useState } from 'react';

//tipagem
interface UserContextProps {
  nome: string;
  loginName: string;
  saveLoginUserToCache: (user: string) => void;
}

//contexto de usuario
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

//criando o provider
export default function UserContextProvider({ children }: any) {
  const [loginName, setLoginName] = useState<string>('');
  const contextValue: UserContextProps = {
    nome: 'Matheus Chiodi',
    loginName,
    saveLoginUserToCache,
  };

  function saveLoginUserToCache(user: string) {
    if (user != '') {
      setLoginName(user);
    }
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
