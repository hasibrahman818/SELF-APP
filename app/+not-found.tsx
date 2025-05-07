import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";



export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Opps! Page not found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>
                    404 - Page not found.
                </Text>
                <Link href="/" style={styles.button}>
                    Go back to Home Screen.
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text: {
        color: "white",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",

    },
});