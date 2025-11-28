import { Text, View, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';
import * as Progress from 'react-native-progress';
import { useState } from "react";

export default function Onboarding1() {
    const { setCurrentScreen, setUserName } = useAppContext();
    const contextValue = useAppContext();
    const [nameInput, setNameInput] = useState('');

    return (
        <View style={styles.screenHolder}>
            <View>
                <View style={styles.progressBox}>
                    <Pressable 
                        style={styles.progressBoxButtonContainer}
                        onPress={() => setCurrentScreen('onboarding2')}
        
                    >
                        <Ionicons 
                            name="chevron-back"
                            size={30}
                            color="rgba(255, 255, 255, 0.85)"
                            style={styles.progressBoxButtonSelf}
                        />
                    </Pressable>
                    {/* <Progress.Bar progress={0.5} width={300} height={20} /> */}
                    <View style={styles.progressBarContainer}>
                        <View style={[styles.progressBarFill, { width: `${0.1 * 100}%` }]} />
                    </View>

                </View>
                <Text style={styles.text1}>First things first,</Text>
                <Text style={styles.text2}>What should we call you?</Text>
                <TextInput
                    style={styles.nameInput}
                    onChangeText={(text) => setNameInput(text)}
                    placeholder="Enter Name"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />


            </View>
            <Pressable
                style={styles.button}
                disabled={!nameInput}
                onPress={() => {
                    console.log("state ", contextValue);
                    setUserName(nameInput);
                    setCurrentScreen('onboarding5');
                }}
            >
                <Text style={styles.buttonText}>Next</Text>
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
        justifyContent: "space-between",
        // alignItems: "center",
        flex: 1,
    },
    progressBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor: "pink",
        marginHorizontal: 20,
        marginBottom: 20,
        gap: 10,
    },
    progressBoxButtonContainer: {
        // backgroundColor: "green",
        width: 20,

    },
    progressBoxButtonSelf: {
        // backgroundColor: "red",
        width: "100%",
        Height: "100%",
        left: -10,

    },
    progressBarContainer: {
        height: 15,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        alignSelf: "center",
        marginRight: 10,
    },
        progressBarFill: {
        height: '100%',
        backgroundColor: 'rgba(113, 179, 113, 0.97)',
        borderRadius: 10,
    },
    text1: {
        fontSize: 20,
        fontFamily: 'Rubik',
        color: "white",
        marginHorizontal: 20,
        fontWeight: 300,
    },
    text2: {
        fontSize: 25,
        fontFamily: 'Rubik',
        color: "white",
        marginTop: 5,
        marginHorizontal: 20,
    },
    nameInput: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        backgroundColor: "rgba(22, 22, 22, 0.85)",
        alignSelf: "center",
        marginTop: 150,

        paddingHorizontal: 20,
        fontFamily: 'Rubik',
        fontSize: 20,
        color: "white",

        shadowColor: "rgba(255, 255, 255, 0.38)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,

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
        
        shadowColor: "rgba(255, 255, 255, 0.38)",
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