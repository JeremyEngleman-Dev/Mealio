import { View, Text, ScrollView, StyleSheet, Image, Pressable} from 'react-native';
import { Link, Stack, useLocalSearchParams } from "expo-router";
import {useState} from "react";
import styling from "./styles/styles"

type Recipe = {
    id: number;
    name: string;
    description: string;
}

const data = {
    "Quick Meals": [
        {
            id: 1,
            name: "Spaghetti",
            description: "Red sauce with ground sausage"
        },
        {
            id: 2,
            name: "Sandwich",
            description: "Simple bread, ham, lettuce and tomato"
        }
    ],
    "Snacks": [
        {
            id: 3,
            name: "Sausage Balls",
            description: "Balls of sausage and breading"
        }
    ]
};

export default function Recipes() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: "Recipes",
                    headerStyle: {
                        backgroundColor: styling.darkColor,
                    },
                    headerTintColor: "white",
                }}
            />
            <ScrollView contentContainerStyle={styles.mainView}>
                {Object.entries(data).map(([category, recipes]) => (
                    <Category key={category} name={category} recipes={recipes}/>
                ))}
            </ScrollView>
        </>
    )
}

function Category(props: any) {
    const [isActive, setIsActive] = useState(false)

    const handleCategoryPress = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <Pressable style={styles.category} onPress={handleCategoryPress}>
                <View>
                    <Text style={{fontSize: 20, color: 'white', padding: 10}}>{props.name}</Text>
                </View>    
            </Pressable>
            {isActive && (
                <View>
                    {Object.entries(props.recipes).map(([key, recipe]) => (
                        <Recipe key={key} details={recipe}/>
                    ))}
                </View>    
            )}
        </>
    )
}

function Recipe(props: any) {
    return (
        <Link
            href={{
                pathname: '/components/Recipe',
                params: {
                    recipeName: props.details.name,
                    pageName: "Recipes"
                },
            }}
        >
            <View style={styles.recipe}>
                <View>
                    <Image src='' style={styles.image}/>    
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.details.name}</Text>
                    <Text>{props.details.description}</Text>
                </View>
            </View>
        </Link>
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
    category: {
        backgroundColor: styling.darkColor,
        width: '100%',
        borderRadius: 4,
        height: 50,
        justifyContent: 'center'
    },
    recipe: {
        padding: 5,
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: 60,
        alignContent: 'center'
    },
    image: {
        height: 40,
        width: 40,
        backgroundColor: styling.placeholderColor,
        borderRadius: 6,
        marginRight: 8,
    }
})