import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('onboarding1');
  const [userData, setUserData] = useState(null);
  
  // You can add more state as needed
  const [isLoading, setIsLoading] = useState(false);

  // Functions to update state
  const navigateToScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  // Value object that will be provided to consumers
  const value = {
    currentScreen,
    navigateToScreen,
    userData,
    setUserData,
    isLoading,
    setIsLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};