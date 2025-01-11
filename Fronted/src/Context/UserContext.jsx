import { createContext, useState } from "react";

export const ContextUser = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(true);

  function logout() {
    setUser(false);
  }

  const stateGlobal = {
    user,
    logout,
  };
  return (
    <ContextUser.Provider value={stateGlobal}>{children}</ContextUser.Provider>
  );
};

export default UserContext;
