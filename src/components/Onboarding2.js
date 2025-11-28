import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';


export default function Onboarding1() {
    return (
        <View style={styles.screenHolder}>
            <Text style={styles.text1}>Lets build us a program for you!</Text>
            <Text style={styles.text2}>Get personalised feedback and an expert backed program designed to unlock the potentual within you.</Text>
            <Pressable
                style={styles.button}
            >
                <Text style={styles.buttonText}>Build My Program</Text>
                <Ionicons 
                name="arrow-forward-circle"
                size={20}
                color="rgba(255, 255, 255, 0.85)"
                // style={style.robot}
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