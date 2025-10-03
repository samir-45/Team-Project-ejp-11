// context/AppContext.js
"use client"

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const appInfo = {
        user,
        setUser,
        isMenuOpen,
        setIsMenuOpen
    }

    return (
        <AppContext.Provider value={appInfo}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
