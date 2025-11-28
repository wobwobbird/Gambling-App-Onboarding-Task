import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './src/components/Onboarding1';
import Onboarding2 from './src/components/Onboarding2';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Rubik': require('./assets/fonts/Rubik-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['rgba(113, 179, 113, 0.97)', 'rgba(89, 210, 20, 0.85)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'top', 'bottom']}>
        {/* <View style={styles.container}> */}
          {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Onboarding1/> */}
        <Onboarding2/>
        <StatusBar style="auto" />
        {/* </View> */}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // root: {
  //   flex: 1,
  // },
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  // container: {
  //   flex: 1,
  // },
});
