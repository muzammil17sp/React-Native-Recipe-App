import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipeList from './screens/Recipe';
import DetailRecipe from './screens/DetailRecipe';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Recipe">
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
// https://dribbble.com/shots/15921850/attachments/7752877?mode=media