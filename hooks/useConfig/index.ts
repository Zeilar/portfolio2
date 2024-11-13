import { useContext } from "react";
import { ConfigContext, type ConfigContextValues } from "@/contexts";
import { z } from "zod";

export const useConfig = (): ConfigContextValues => {
  const context = useContext(ConfigContext);
  return z.object({ apiUrl: z.string().min(1) }).parse(context);
};
