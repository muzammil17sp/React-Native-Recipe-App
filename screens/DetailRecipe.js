import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fetchRecipeDetail} from '../api/Api';

const DetailRecipe = ({route}) => {
  const id = route.params;
  console.log(id)
  useEffect(() => {
    const data = fetchRecipeDetail(id)
      .then(detail => console.log(detail))
      .catch(err => console.log(err));
  }, []);
  return (
    <View>
      <Text>DetailRecipe</Text>
    </View>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({});
