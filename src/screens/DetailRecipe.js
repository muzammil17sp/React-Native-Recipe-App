import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/SimpleLineIcons';
import VideoPlayer from 'react-native-video-player';

import {fetchRecipeDetail} from '../api/Api';
import {black, green, white} from '../utils/color';

const DetailRecipe = ({route, navigation}) => {
  const [recipeDetail, setRecipeDetail] = useState(null);
  const id = route.params;
  console.log(id);
  useEffect(() => {
    const data = fetchRecipeDetail(id)
      .then(detail => setRecipeDetail(detail))
      .catch(err => console.log(err));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {recipeDetail ? (
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <View style={styles.headerIcon}>
              <Icon name="ios-arrow-back-outline" size={22} color={white} />
            </View>
          </Pressable>
          <View style={styles.videoContainer}>
            {recipeDetail.original_video_url ? (
              <VideoPlayer
                video={{
                  uri: recipeDetail.original_video_url,
                }}
                thumbnail={{uri: recipeDetail.thumbnail_url}}
              />
            ) : (
              <Image
                source={{uri: recipeDetail.thumbnail_url}}
                style={styles.backgroundImage}
              />
            )}
          </View>
          <View style={{marginVertical: 30}}>
            <Text style={styles.bigHeading}>{recipeDetail.name}</Text>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Lato-Regular',
                  color: black,
                }}>
                {recipeDetail?.total_time_tier.display_tier}{' '}
                <Clock name="clock" />
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Lato-Regular',
                  color: black,
                }}>
                {recipeDetail?.num_servings} Person{' '}
                <Icon name="person-outline" />
              </Text>
            </View>
            <Text
              style={{
                ...styles.bigHeading,
                fontWeight: 'bold',
                fontFamily: 'Lato-Bold',
                marginBottom: 8,
              }}>
              Ingredients
            </Text>
            {recipeDetail?.sections?.map(section =>
              section?.components?.map(component => (
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 4,
                    fontFamily: 'Lato-Regular',
                    color: black,
                  }}
                  key={component.position}>
                  {component?.position} )  {component?.raw_text}
                </Text>
              )),
            )}
            <Text
              style={{
                ...styles.bigHeading,
                fontWeight: 'bold',
                marginVertical: 8,
                fontFamily: 'Lato-Bold',
              }}>
              Instructions
            </Text>
            {recipeDetail?.instructions?.map(instruction => (
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 4,
                  fontFamily: 'Lato-Regular',
                  color: black,
                }}
                key={instruction.position}>
                {instruction?.position} ) {instruction?.display_text}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <ActivityIndicator size="large" color={green} />
      )}
    </ScrollView>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
paddingHorizontal:20
  },
  videoContainer: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
  },
  headerIcon: {
    height: 40,
    width: 40,
    borderRadius: 8,
    padding: 8,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  bigHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: black,
  },
  smallHeading: {
    fontSize: 16,
    marginRight: 5,
  },
});
