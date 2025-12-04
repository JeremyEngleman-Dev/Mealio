import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Link, Stack, useLocalSearchParams } from "expo-router";
import styling from "../styles/styles"

const data = {
    "steps": [
        {
            order: 1,
            instructions: "Using water and flour, make dough"
        },
        {
            order: 2,
            instructions: "Bake bread at 400 degrees till done"
        }
    ]
};

export default function Recipe() {
    const params = useLocalSearchParams();

    return (
        <>
            <Stack.Screen
                options={{
                    title: `${params.pageName} > ${params.recipeName}`,
                    headerStyle: {
                        backgroundColor: styling.darkColor,
                    },
                    headerTintColor: "white",
                }}
            />
            <View style={styles.mainView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{params.recipeName}</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexGrow: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 4,
        backgroundColor: styling.lightColor,
        gap: 2,
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold'
    }
})