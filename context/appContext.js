import { createContext, useContext } from 'react';

// Theme is a stable scalar per page load — default 'normal' means no guard needed.
export const ThemeContext = createContext('normal');

export function useTheme() {
  return useContext(ThemeContext);
}

// Navigation context: workMenu coordination between navbar and home page.
const AppContext = createContext(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContext.Provider');
  return ctx;
}

export default AppContext;
