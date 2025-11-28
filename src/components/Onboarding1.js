import { Text, View, StyleSheet } from "react-native";

export default function Onboarding1() {
    return (
        <View>
            <View style={style.logo} >
                <Text>Fold</Text>
            </View>

        </View>
    )

}

const style = StyleSheet.create({
    screenHolder: {
        // flex: 1,
        justifyContent: "flex-start",
    },
    logo: {
        backgroundColor: "green",
    }
})