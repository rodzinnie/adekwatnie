import { useState, useContext, createContext } from "react";
import fetchedData from "../data";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // this is going to be fetched
    const [ data, setData ] = useState({...fetchedData});
    
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
const useData = () => useContext(DataContext);
export default useData
