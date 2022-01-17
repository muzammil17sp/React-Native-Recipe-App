import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import {black, grey, lightGrey, white} from '../utils/color';

const Recipe = ({item, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailRecipe', item.id)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            source={{
              uri: item.thumbnail_url,
            }}
            style={{height: '100%', width: '100%', }}
          />
        </View>
        <View style={styles.cardDetailContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.bigHeading}>{item.name}</Text>
            <Icon name="ios-fast-food-outline" size={22} color={lightGrey} />
          </View>
          <Text style={styles.smallHeading}>
            {item.num_servings} persons | {item?.total_time_tier?.display_tier}
          </Text>

          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Recipe;

const styles = StyleSheet.create({
  recipeContainer: {
    height: 190,
    overflow: 'hidden',
    borderRadius: 6,
    marginBottom: 20,
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
    color: grey,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  bigHeading: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Lato-Bold',
    color: black,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation:8
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: lightGrey,
    borderRadius: 20,
  },
  cardDetailContainer: {
    height: 120,
    backgroundColor: white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    padding: 20,
  },
});

//  <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("DetailRecipe",item.id)}>
//             <View style={styles.cardContainer}><View style={styles.cardImageContainer}>
//                 <Image  source={{
//               uri:item.thumbnail_url
//             }} style={{height:"100%",width:"100%",resizeMode:"contain"}}/>
//             </View>
//                 <View style={styles.cardDetailContainer}>
//                 <Text style={{...styles.bigHeading, color: white}}>
//                {item.name}
//               </Text>
//               <Text style={styles.smallHeading}>{item.num_servings} persons | {item?.total_time_tier?.display_tier}</Text>

//                     </View>
//                 </View>
//         </TouchableOpacity>
