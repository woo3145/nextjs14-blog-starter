'use client';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from 'react';
import { translations } from './_translations';

interface ContextType {
  translate: (key: string) => string | string[];
  toggleLanguage: () => void;
  language: 'en' | 'ko';
}

const TranslationContext = createContext<ContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context)
    throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<'en' | 'ko'>('en');

  const translate = (key: string): string | string[] =>
    translations[language][key];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  return (
    <TranslationContext.Provider
      value={{ translate, language, toggleLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
