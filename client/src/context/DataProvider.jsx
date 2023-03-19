import { createContext, useState } from "react";


export const DataContext = createContext(null); //context is ready at this step


const DataProvider = ({children}) => {

    const [account, setAccount] = useState('');

    <DataContext.Provider value={{
        account,
        setAccount
    }}>
        {children}
    </DataContext.Provider>
}

export default DataProvider;