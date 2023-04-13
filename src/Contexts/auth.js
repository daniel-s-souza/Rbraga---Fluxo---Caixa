import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children}) => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    const userStorage = localStorage.getItem('userDb');

      if (userToken && userStorage) {
        const hasUser = JSON.parse(userStorage)?.filter(user => user.email === JSON.parse(userToken).email);

      if (hasUser) setUser(hasUser[0]);
  }
}, []);

const Singin = (email, password) => {
  const userStorage = JSON.parse(localStorage.getItem('userStorage'));

  const hasUser = userStorage?.filter((user) => user.email === email);

  if (hasUser?.length) {
    if(hasUser[0].email === email && hasUser[0].password === password) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('userToken', JSON.stringify({email, token}));
      setUser({email, password});
      return;
    } else {
      return "E-mail ou senha incorretos"
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>
};
