import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("chatsi-custom-theme") || "light",
    setTheme: (theme) => {
        localStorage.setItem("chatsi-custom-theme",theme);
        set({ theme })
    }
      
    
    
}));
