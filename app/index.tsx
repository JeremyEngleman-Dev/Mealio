import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link, Stack } from "expo-router";
import styling from "./styles/styles"

export default function HomeScreen() {
  const appName = 'Mealio';

  return (
    <>
      <Stack.Screen
        options={{
          title: appName,
          headerStyle: {
            backgroundColor: styling.darkColor,
          },
          headerTintColor: "white",
        }}
      />
      <View style={{ flex: 1, backgroundColor: styling.lightColor }}>
        <ScrollView contentContainerStyle={styles.mainView}>
          <Link
          key='Recipes'
          href={{
            pathname: '/featureRecipes',
            params: {appName: appName},
          }}
          style={styles.feature}>Recipes</Link>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: styling.lightColor,
  },
  feature: {
    width: '40%',
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: styling.darkColor,
    height: '100%',
    borderRadius: 10,
    padding: 10,  },
})