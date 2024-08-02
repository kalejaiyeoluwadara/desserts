"use client";
import React, { useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context value
interface AppContextType {
  // Add any state or functions that you will provide through context
  exampleState: string;
  cart: Cart[];
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setExampleState: React.Dispatch<React.SetStateAction<string>>;
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}
interface Cart {
  count: number;
  base_price: number;
  name: string;
  price: number;
}

// Create a context with a default value
const AppContext = React.createContext<AppContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  const [exampleState, setExampleState] = useState<string>("");
  const [cart, setCart] = useState<Cart[]>([]);
  const [modal, setModal] = useState(false);
  return (
    <AppContext.Provider
      value={{ exampleState, setExampleState, cart, setCart, modal, setModal }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobal = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobal must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
