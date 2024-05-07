'use client';
import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useEffect,
} from 'react';
import { translations } from './_translations';
import { useLocalStorage } from '@/hooks/use-localstorage';

interface ContextType {
  translate: (key: string) => string | string[];
  toggleLanguage: () => void;
  language: 'en' | 'ko';
}

const TranslationContext = createContext<ContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
  initialLanguage: 'en' | 'ko';
}

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
  initialLanguage,
}) => {
  const [storedLanguage, setStoredLanguage] = useLocalStorage<'en' | 'ko'>(
    'lang',
    initialLanguage
  );
  const [language, setLanguage] = useState<'en' | 'ko'>(storedLanguage);

  useEffect(() => {
    setLanguage(storedLanguage);
  }, [storedLanguage]);

  const translate = (key: string): string | string[] =>
    translations[language][key];

  const toggleLanguage = async () => {
    setStoredLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
    await fetch('/api/set-language', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language }),
    });
  };

  return (
    <TranslationContext.Provider
      value={{ translate, language, toggleLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
