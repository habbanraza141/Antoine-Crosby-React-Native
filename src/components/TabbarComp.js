import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Icon} from '../config';
import { moderateScale } from '../config';
import { moderateScaleVertical } from '../config';

export default class TabbarComp extends React.Component {
  render() {
    const {state, descriptors, navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#14252A',
          flexDirection: 'row',
          overflow: 'visible',
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };
          let imageSrc = require('../assets/icons/home1.png');
          if (route.name === 'Shop')
            imageSrc = require('../assets/icons/shop2.png');
          if (route.name === 'Card')
            imageSrc = require('../assets/icons/card2.png');
          if (route.name === 'Profile')
            imageSrc = require('../assets/icons/profile2.png');
          return (
            <TouchableOpacity
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={styles.tabs}>
              <Image
                source={imageSrc}
                style={{
                  height: 25,
                  width: 25,
                  marginBottom: 8,
                  tintColor: isFocused ? Colors.primary : Colors.grey,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: isFocused ? Colors.primary : Colors.grey,
                  fontSize: 12,
                }}>
                {route.name}
              </Text>
              {isFocused ? (
                <View
                  style={{
                    width: moderateScale(6),
                    height: moderateScale(6),
                    borderRadius: moderateScale(3),
                    backgroundColor: '#F1668D',
                    position: 'absolute',
                    top: moderateScaleVertical(15),
                    left: moderateScale(35)
                  }}
                />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
