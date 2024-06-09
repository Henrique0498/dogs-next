"use client";
import logout from "@/actions/logout";
import validateToken from "@/actions/validateToken";
import React, { useEffect } from "react";

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type User = {
  id: number;
  email: string;
  username: string;
  name: string;
};

export const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error("useContext deve estar dentro de um provider");
  }

  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = React.useState(user);

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();

      if (!ok) {
        await logout();
      }
    }
    if (userState) {
      validate();
    }
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
