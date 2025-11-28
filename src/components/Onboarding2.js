import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

export default function Onboarding1() {
    const { navigateToScreen } = useAppContext();
    const contextValue = useAppContext();

    return (
        <View style={styles.screenHolder}>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <Text style={styles.text1}>Lets build us a program for you!</Text>
            <Text style={styles.text2}>Get personalised feedback and an expert backed program designed to unlock the potentual within you.</Text>
            <Pressable
                style={styles.button}
                onPress={() => {
                    navigateToScreen('onboarding3');
                    console.log("state ", contextValue);
                }}
            >
                <Text style={styles.buttonText}>Build My Program</Text>
                <Ionicons 
                    name="arrow-forward-circle"
                    size={20}
                    color="rgba(255, 255, 255, 0.85)"
                />


            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    screenHolder: {
        justifyContent: "flex-end",
        // alignItems: "center",
        flex: 1,
    },
    box1: {
        height: 200,
        width: 250,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: 'rgba(4, 143, 55, 0.61)',
        transform: [{ rotate: '-10deg' }],
        marginBottom: 80,
        alignSelf: "center",
        
        backgroundColor: "rgb(253, 255, 254)",
        
        shadowColor: "rgba(0, 0, 0, 0.26)",
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        
        
    },
    box2: {
        height: 200,
        width: 250,
        borderRadius: 20,
        borderWidth: 5,

        borderColor: 'rgba(4, 143, 55, 0.61)',
        transform: [{ rotate: '15deg' }],
        marginBottom: 60,
        alignSelf: "center",
        backgroundColor: "rgb(255, 255, 255)",

        shadowColor: "rgba(0, 0, 0, 0.26)",
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    text1: {
        fontSize: 24,
        fontFamily: 'Rubik',
        color: "white",
        marginHorizontal: 20,
    },
    text2: {
        fontSize: 20,
        fontFamily: 'Rubik',
        fontWeight: 300,
        color: "white",
        marginTop: 15,
        marginHorizontal: 20,
    },
    button: {
        marginTop: 30,
        backgroundColor: "rgba(22, 22, 22, 0.85)",
        height: 50,
        width: "80%",
        borderRadius: 25,

        alignSelf: "center",

        justifyContent: "center",
        alignItems: "center",
        
        shadowColor: "rgb(0, 0, 0)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

        flexDirection: "row",
        gap: 5,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Rubik',
        color: "white",
    },
})