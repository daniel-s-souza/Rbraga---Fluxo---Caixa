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

const singin = (email, password) => {
  const userStorage = JSON.parse(localStorage.getItem('userDb'));

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

  const signup = (email, password, name) => {
    const userStorage = JSON.parse(localStorage.getItem('userDb'));

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse e-mail"
    }

    let newUser;

    if (userStorage) {
      newUser = [...userStorage, {email, password, name}]
    } else {
      newUser = [{email, password, name}]
    }

    localStorage.setItem("userDb", JSON.stringify(newUser))
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  }

  return <AuthContext.Provider value={{user, signed: !!user, singin, signup, signOut}}>{children}</AuthContext.Provider>
};
