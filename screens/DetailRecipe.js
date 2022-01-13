import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import Icon from 'react-native-vector-icons/Ionicons';
import Clock from "react-native-vector-icons/SimpleLineIcons"
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
    <View style={styles.container}>
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
          <View style={{justifyContent:"space-between",flexDirection:"row",marginVertical:15,alignItems:"center"}}>
          <Text style={styles.bigHeading} n numberOfLines={3} >{recipeDetail.name}</Text>
<View style={{flexDirection:"row",alignItems:"center"}}>
  <Text style={styles.smallHeading}>{recipeDetail.total_time_tier.display_tier}</Text>
  <Clock name='clock' size={12}/>
</View>
          </View>

        </View>
      ) : (
        <ActivityIndicator size="large" color={green} />
      )}
    </View>
  );
};

export default DetailRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bigHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: black,
  },
  smallHeading:{
    fontSize:16,
    marginRight:5

  }
});
