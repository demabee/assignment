import { createContext, type ReactNode, useState } from 'react';

interface LanguageContextProps {
  language: string
  setLanguage: (newSearchQuery: string) => void
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  setLanguage: () => {}
});

interface LanguageProviderProps {
  children?: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children
}) => {
  const [language, setLanguage] = useState<string>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
