import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import phone from '../../assets/phone-cal.png';
import fold from '../../assets/fold-logo.png';
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding1() {
    return (
        <View style={styles.screenHolder}>
            <Image
                source={fold}
                style={styles.logo}
            />
            <Image
                source={phone}
                style={styles.phoneImage}
            />
            <Text style={styles.text2}>Find</Text>
            <Text style={styles.text3}>Control & hope</Text>
            <Text style={styles.text4}>Beyond gambling</Text>
            <Pressable
                style={styles.button}
            >
                <Text style={styles.buttonText}>Lets Get Started</Text>
                <Ionicons 
                    name="leaf"
                    size={20}
                    color="rgba(255, 255, 255, 0.85)"
                />
            </Pressable>
            <Text style={styles.text5}>Already have an account?</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    screenHolder: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
    },
    logo: {
        height: 100,
        width: 100,

        shadowColor: "rgba(0, 0, 0, 0.61)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    phoneImage: {
        width: 200,
        height: 400,

        shadowColor: "rgba(0, 0, 0, 0.61)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,

    },
    text2: {
        marginTop: 30,
        fontSize: 20,
        fontFamily: 'Rubik',
        fontWeight: 300,
        color: "white",
    },
    text3: {
        fontSize: 40,
        fontFamily: 'Rubik',
        color: "white",
    },
    text4: {
        fontSize: 25,
        fontFamily: 'Rubik',
        color: "white",
    },
    button: {
        marginTop: 40,
        backgroundColor: "rgba(22, 22, 22, 0.85)",
        height: 50,
        width: "80%",
        borderRadius: 25,

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
    text5: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Rubik',
        color: "white",        
    }

})