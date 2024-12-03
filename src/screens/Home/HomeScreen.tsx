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
import {Container} from '../../components/Container';
import {HomeHeader} from './HomeHeader';
import {CardIcons, Icons} from '../../utils/Icons';
import {DIMENSIONS} from '../../utils/Constants';
import {Colors, FontFamily} from '../../utils/Theme';
import {Card} from './HomeCard';
import { CarouselButton } from './CarouselButton';



const CardDataList = [
  {
    id: '1',
    background: CardIcons.purpleBackground,
    image: CardIcons.purpleCard,
    percent: 0.8,
    time: '4 min',
    label: 'Jumash',
  },
  {
    id: '2',
    background: CardIcons.greenBackground,
    image: CardIcons.greenCard,
    percent: 25,
    time: '10 min',
    label: 'Tania',
  },
  {
    id: '3',
    background: CardIcons.blueBackground,
    image: CardIcons.blueCard,
    percent: 0.8,
    time: '4 min',
    label: 'Rambam',
  },
  {
    id: '4',
    background: CardIcons.darkBlueBackground,
    image: CardIcons.darkBlueCard,
    percent: 100,
    time: '1 hr 55 min',
    label: 'Hayom lom',
  },
];


export const HomeScreen = () => {
  return (
    <Container isScrollable>
      <View style={{padding: 20}}>
        <HomeHeader />

        <ImageBackground
          source={Icons.homeCardBackground}
          style={{
            height: DIMENSIONS.screenWidth * 0.6,
            width: '100%',
            marginTop: 10,
          }}
          resizeMode="contain">
          <View style={styles.carouselCardContainer}>
            <Text style={styles.carouselCardTitle}>Morning prayer</Text>
            <Text style={styles.carouselCardSubTitle}>20.10.2022</Text>
            <Text style={styles.carouselCardSubTitle}>
              יום שבת, ה׳ בסיוון תשפ״ב
            </Text>
          </View>
        </ImageBackground>

          <View style={{flexDirection:'row', justifyContent:'center'}} >
            <View style={{height:8, width:8, backgroundColor:'red',borderRadius:5, margin:5}} />
            <View style={{height:8, width:8, backgroundColor:'lightgray',borderRadius:5,  margin:5}} />
            <View style={{height:8, width:8, backgroundColor:'lightgray',borderRadius:5, margin:5}} />
          </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <CarouselButton source={Icons.download} label="Download"/>
          <CarouselButton source={Icons.ring} label="Routine" />
          <CarouselButton source={Icons.favourite} label="Favourites"/>
          <CarouselButton source={Icons.clock} label="Recents"/>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 15,
          padding: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: FontFamily.SemiBold,
              fontSize: 20,
              fontWeight: 600,
            }}>
            Shiurim
          </Text>
          <Text
            style={{
              fontFamily: FontFamily.Medium,
              color: Colors.Primary,
            }}>
            {' '}
            (+50 Learn today){' '}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: FontFamily.Medium,
              color: Colors.textGray,
            }}>
            View more
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingBottom:60
        }}>
        {CardDataList.map((item, index) => {
          return <Card {...item} />;
        })}
      </View>

      <View
        style={{
          backgroundColor: '#EBF0F1',
          paddingHorizontal: 20,
          paddingVertical:50
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
          }}>
          <Image
            source={Icons.quote}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode="contain"
          />

          <Text style={{
            fontFamily:FontFamily.Regular,
            marginTop:20
          }}>
            In that era, there will be neither famine or war, envy or
            competition, for good will flow in abundance and all the
            delightswill be freely available as dust. The occupation of the
            entire world will be solerly to know G-d.
          </Text>

          <Text style={{fontFamily:FontFamily.Medium, marginTop:15}}>
          - Mishneh Tarah 
          </Text>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  carouselCardContainer: {
    padding: 10,
    paddingBottom: 25,
    height: '100%',
    paddingLeft: '10%',
    justifyContent: 'center',
  },
  carouselCardTitle: {
    fontFamily: FontFamily.SemiBold,
    fontSize: 22,
    paddingBottom: 15,
    color: 'white',
  },
  carouselCardSubTitle: {
    fontFamily: FontFamily.Medium,
    fontSize: 18,
    color: 'white',
  },
  subTitle: {
    fontFamily: FontFamily.Regular,
  },
});
