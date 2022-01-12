import React from 'react'
import { StyleSheet, Text, View,  ImageBackground,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { black, white } from '../utils/color';

const Recipe = ({item,navigation}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("DetailRecipe",item.id)}>
        <View style={styles.recipeContainer}>
          <ImageBackground
            style={styles.recipeImage}
            source={{
              uri:item.thumbnail_url
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)']}
              style={{
                backgroundColor: 'transparent',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
            />
            <View style={styles.recipeText}>
              <Text style={{...styles.bigHeading, color: white}}>
               {item.name}
              </Text>
              <Text style={styles.smallHeading}>{item.num_servings} persons | {item?.total_time_tier?.display_tier}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
}

export default Recipe

const styles = StyleSheet.create({
    recipeContainer: {
        height: 190,
        overflow: 'hidden',
        borderRadius: 6,
        marginBottom:20
      },
      recipeImage: {
        height: '100%',
        width: '100%',
      },
      recipeText: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
      },
      smallHeading: {
        color: white,
        fontSize: 16,
      },
      bigHeading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: black,
      },
})
