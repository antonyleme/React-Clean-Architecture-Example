import { createContext, useContext } from "react";

export const createGenericContext = <T>(defaultValues: T | undefined) => {
  type GenericReturn = T;
  const context = createContext<T | undefined>(defaultValues);
  const Provider = context.Provider;

  const useGenericContext = (): GenericReturn => {
    const values = useContext(context);

    if (!values)
      throw Error(
        `The context must be placed inside of a provider or receive a default value`
      );

    return values;
  };

  return {
    context,
    Provider,
    useGenericContext,
  };
};
