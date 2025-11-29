import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './src/components/Onboarding1';
import Onboarding2 from './src/components/Onboarding2';
import Onboarding3 from './src/components/Onboarding3';
import Onboarding5 from './src/components/Onboarding5';
import Onboarding6 from './src/components/Onboarding6';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { AppProvider, useAppContext } from './src/context/AppContext';

function AppContent() {
  const { currentScreen } = useAppContext();

  return (
    <LinearGradient
      colors={currentScreen === 'onboarding1' || currentScreen === 'onboarding2' ? ['rgba(113, 179, 113, 0.97)', 'rgba(89, 210, 20, 0.85)'] : ['rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.95)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top', 'bottom']}>
        {currentScreen === 'onboarding1' && <Onboarding1 />}
        {currentScreen === 'onboarding2' && <Onboarding2 />}
        {currentScreen === 'onboarding3' && <Onboarding3 />}
        {currentScreen === 'onboarding5' && <Onboarding5 />}
        {currentScreen === 'onboarding6' && <Onboarding6 />}
        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Rubik': require('./assets/fonts/Rubik-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <AppContent/>
    </AppProvider>
  )

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
