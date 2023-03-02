import { createContext, useContext, useEffect, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [remove, setRemove] = useState(false);
    return (
        <LayoutContext.Provider value={{ remove, setRemove }}>
            { children }
        </LayoutContext.Provider>
    )
}

export const useLayout = () => useContext(LayoutContext);