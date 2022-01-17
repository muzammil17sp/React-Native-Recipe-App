import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchRecipes} from "../api/Api";
import Recipe from '../components/Recipe';
import {black, grey, white, green, background, lightGrey} from '../utils/color';

const RecipeList = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    const result = fetchRecipes()
      .then(result => setRecipes(result))
      .catch(err => console.log(err));
  }, []);
  const filterRecies = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(text.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bigHeading}>Find Best Recipe</Text>
        <Text style={styles.bigHeading}>For Cooking</Text>
      </View>

      <View style={styles.mainInputContainer}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={20} color={grey} />
          <TextInput
            value={text}
            onChangeText={e => setText(e)}
            style={styles.input}
            placeholder="Seach Recipe"
          />
        </View>
        <View style={styles.filterIcon}>
          <Icon name="filter-outline" size={20} color={white} />
        </View>
      </View>
      {recipes.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterRecies}
          renderItem={({item}) => <Recipe item={item} navigation={navigation} />}
        />
      ) : (
        <ActivityIndicator size="large" color={green} />
      )}
    </View>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingHorizontal:20
  },
  bigHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:"Lato-Bold",
    color: black,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: white,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: lightGrey,
  },
  input: {
    width: '75%',
    fontSize: 16,
    color: grey,
    marginLeft: 4,
  },
  filterIcon: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: white,
    borderRadius: 6,
    backgroundColor: black,
    opacity: 0.9,
  },
});
