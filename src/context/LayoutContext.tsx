"use client";

import { createContext, useContext, useState, type ReactNode, } from "react";

interface LayoutContextType {
  hideLayout: boolean;
  setHideLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<
  LayoutContextType | undefined
>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
}


export function LayoutProvider({ children, }: LayoutProviderProps) {
  const [hideLayout, setHideLayout] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ hideLayout, setHideLayout }}
    >
      {children}
    </LayoutContext.Provider>
  );
}


export function useLayout() {
  const context = useContext(LayoutContext); 

  if (!context) {
    throw new Error(
      "useLayout must be used within LayoutProvider"
    );
  }

  return context;
}