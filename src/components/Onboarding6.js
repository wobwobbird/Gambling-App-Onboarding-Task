import { Text, View, StyleSheet, Image, Pressable, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';
import { useState } from "react";

export default function Onboarding1() {
    const { setCurrentScreen, userName } = useAppContext();
    const contextValue = useAppContext();
    const [boxesSelected, setBoxesSelected] = useState([]);

    const acheivements = [
        "🚫 Stop Gambling Completely",
        "📉 Use Less or Differently",
        "📊 Continue With Current Use",
        "🤔 Not Sure Yet",
    ]

    const selectionSingle = (index) => {
        const isSelected = boxesSelected.includes(acheivements[index]);
        
        return (
            <Pressable 
                key={index}
                style={[styles.selectionBox, isSelected && styles.selectionBoxSelected]}
                onPress={() => {
                    if (isSelected) {
                        // Deselect: remove from array
                        setBoxesSelected(boxesSelected.filter(item => item !== acheivements[index]));
                    } else if (boxesSelected.length < 3) {
                        // Select: add to array if less than 3
                        setBoxesSelected([...boxesSelected, acheivements[index]]);
                    }
                    // If already 3 selected and trying to add new one, do nothing
                }}
            >
                <Text style={styles.selectionBoxText}>{acheivements[index]}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.screenHolder}>
            <View>
                <View style={styles.progressBox}>
                    <Pressable 
                        style={styles.progressBoxButtonContainer}
                        onPress={() => setCurrentScreen('onboarding3')}
        
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
                        <View style={[styles.progressBarFill, { width: `${0.2 * 100}%` }]} />
                    </View>

                </View>
                <Text style={styles.text1}>Git it {userName}!</Text>
                <Text style={styles.text2}>Now, what are your long-term goals regarding gambling?</Text>
                <Text style={styles.text3}>Choose up to 3.</Text>
            </View>
            <ScrollView style={styles.selectionContainer}>
                {acheivements.map((_, index) => selectionSingle(index))}
            </ScrollView>
            <Pressable
                style={styles.button}
                onPress={() => {
                    setCurrentScreen('onboarding5');
                    // console.log("state ", contextValue);
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
    text3: {
        fontSize: 18,
        fontFamily: 'Rubik',
        color: "white",
        marginTop: 5,
        marginHorizontal: 20,
        fontWeight: 300,
    },
    selectionContainer: {
        marginTop: 30,
    },
    selectionBox: {
        backgroundColor: "rgba(22, 22, 22, 0.85)",
        height: "auto",
        width: "80%",
        borderRadius: 25,

        alignSelf: "center",

        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,

        marginBottom: 15,
    },
    selectionBoxSelected: {
        backgroundColor: "rgba(89, 210, 20, 0.85)",
    },
    selectionBoxText: {
        fontSize: 18,
        fontFamily: 'Rubik',
        color: "white",
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