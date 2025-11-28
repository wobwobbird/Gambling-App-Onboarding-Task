import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './src/components/Onboarding1';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';



export default function App() {
  return (
    <LinearGradient
      colors={['rgba(113, 179, 113, 0.97)', 'rgba(89, 210, 20, 0.85)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <Onboarding1/>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    // flex: 1,
    // marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
