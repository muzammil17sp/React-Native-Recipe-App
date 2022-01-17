import React from 'react';
import {StyleSheet,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipeList from './src/screens/Recipe';
import DetailRecipe from './src/screens/DetailRecipe';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Recipe">
    
    <StatusBar
    backgroundColor="white"
    barStyle="dark-content"
  />

      <Stack.Navigator>
        <Stack.Screen
          name="Recipe"
          component={RecipeList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRecipe"
          component={DetailRecipe}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
