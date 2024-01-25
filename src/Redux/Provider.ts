'use client'
import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

interface ChildTypes {
  children: ReactNode;
}

export const Providers: React.FC<ChildTypes> = ({ children }) => {
  return <Provider store={store}> {children} </Provider>
};
