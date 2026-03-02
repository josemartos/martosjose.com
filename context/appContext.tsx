import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const ThemeContext = createContext<string>('normal');

export function useTheme() {
  return useContext(ThemeContext);
}

interface AppContextValue {
  shouldScrollToWork: boolean;
  setShouldScrollToWork: Dispatch<SetStateAction<boolean>>;
}

// Navigation context: shouldScrollToWork coordination between navbar and home page.
const AppContext = createContext<AppContextValue | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContext.Provider');
  return ctx;
}

export default AppContext;
