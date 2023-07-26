import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => {
    const arr = useReducer(reducer, initialState)
   return (
    <DataLayerContext.Provider value={arr}>
        {children}
    </DataLayerContext.Provider>
   )
}
export const useDataLayerValue = () => useContext(DataLayerContext);