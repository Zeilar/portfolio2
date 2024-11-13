"use client";

import { type PropsWithChildren, createContext, useMemo } from "react";

export interface ConfigContextValues {
  apiUrl: string;
}

interface ConfigContextProviderProps extends PropsWithChildren {
  apiUrl: string;
}

export const ConfigContext = createContext<ConfigContextValues | undefined>(
  undefined
);

export function ConfigProvider({
  apiUrl,
  children,
}: ConfigContextProviderProps) {
  const values = useMemo<ConfigContextValues>(() => ({ apiUrl }), [apiUrl]);

  return (
    <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
  );
}
