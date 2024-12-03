import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DIMENSIONS} from '../../utils/Constants';
import { FontFamily } from '../../utils/Theme';

const BUTTON_SIZE = DIMENSIONS.screenWidth / 5.4;
export const CarouselButton = ({source, label}: {source?: ImageSourcePropType, label:string}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity activeOpacity={0.8} style={style.cardButton}>
        <Image source={source} style={style.icon} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={{fontFamily:FontFamily.Regular, marginTop:10, fontSize:13}}>{label}</Text>
    </View>
  );
};

const style = StyleSheet.create({
    container:{
        alignItems:'center'
    },
  cardButton: {
    backgroundColor: 'white',
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#aae',
    shadowOpacity: 0.5,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
