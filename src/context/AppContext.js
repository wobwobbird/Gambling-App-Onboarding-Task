import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const useUserName = () => {
    const { userName } = useAppContext();

    return userName;
}

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('onboarding1');
  const [userName, setUserName] = useState('');
  
//   const [isLoading, setIsLoading] = useState(false);

  // Value object that will be provided to consumers
  const value = {
    currentScreen,
    setCurrentScreen,
    userName,
    setUserName,
    // isLoading,
    // setIsLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};