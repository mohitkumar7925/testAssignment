import React, {memo} from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CardIcons, Icons} from '../../utils/Icons';
import {DIMENSIONS} from '../../utils/Constants';
import {Colors, FontFamily} from '../../utils/Theme';

const width = DIMENSIONS.screenWidth / 2.4;

const ProgressBar = ({percent}: {percent: number}) => {
  return (
    <View
      style={{
        width: width - 40,
        backgroundColor: 'gray',
        height: 6,
        borderRadius: 3,
        marginTop: 8,
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: (width - 40) * (percent / 100),
          backgroundColor: 'white',
          height: 6,
          borderRadius: 3,
        }}
      />
    </View>
  );
};

const FeaturesRadioLabel = ({
  icon,
  label,
}: {
  icon: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '45%',
        backgroundColor: '#EBF0F1',
        borderRadius: 5,
        padding: 2,
      }}>
      <Image
        source={icon}
        style={{height: 14, width: 14}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: FontFamily.Regular,
          fontWeight: 600,
          color: 'gray',
        }}>
        {' '}
        {label}
      </Text>
    </View>
  );
};

export const Card = memo(
  ({
    background,
    image,
    percent,
    time,
    label,
  }: {
    background: ImageSourcePropType;
    image: ImageSourcePropType;
    label: string;
    percent: number;
    time: string;
  }) => {
    return (
      <View style={{width: width, margin: 10}}>
        <ImageBackground
          source={background}
          style={styles.imageBackground}
          resizeMode="contain">
          <View style={{top: -25}}>
            <Image
              source={image}
              style={{
                width: width - 40,
                height: (width - 40) * 1.45,
              }}
              borderRadius={15}
            />
            <ProgressBar percent={percent} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={styles.textWhite}>{percent}%</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Icons.clock}
                  style={{width: 14, height: 14, tintColor: 'white'}}
                  resizeMode="contain"
                />
                <Text style={styles.textWhite}> {time}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <Text style={styles.label}>{label}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 3,
          }}>
          <FeaturesRadioLabel icon={Icons.audio} label={'Audio'} />
          <FeaturesRadioLabel icon={Icons.video} label={'Video'} />
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: width * 1.35,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    fontFamily: FontFamily.Regular,
    fontWeight: 600,
    color: 'white',
  },
  label: {
    fontFamily: FontFamily.Medium,
    fontSize: 20,
    fontWeight: 600,
    marginTop: 5,
  },
});
