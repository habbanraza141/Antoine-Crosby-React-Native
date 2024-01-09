import React from 'react';
import {  DrawerContentScrollView,  DrawerItem} from '@react-navigation/drawer';

import { Image, StyleSheet, View, Text } from 'react-native';
import imagePath from '../config/imagePath';
import ShopStack from '../navigation/ShopStack';
import CardStack from '../navigation/CardStack';
import ProfileStack from '../navigation/ProfileStack';
import navigationStrings from '../config/navigationStrings';


export default function CustomDrawerContent(props) {
  const { navigation } = props
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: '#14252A' }}
      {...props}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }} >
        <Image
          style={{ height: 62, width: 65, marginRight: 15 }}
          source={imagePath.men3} />
        <View>
          <Text style={{ fontSize: 15, color: '#fff' }} >Andks Dbnsjndks</Text>
          <Text style={{ fontSize: 12 , color: '#CDCDCD' }} >jhds@gmakjkds.com</Text>
        </View>
      </View>
      <View style={{height: 0.5, backgroundColor: '#9A9A9A', marginHorizontal: 20}} >

      </View>
      <DrawerItem
        label="Shop"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate('ShopStack')}
      />
      <DrawerItem
        label="Cart"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate('CartStack')}
      />
      <DrawerItem
        label="Loyality Card"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate('CardStack')}
      />
      <DrawerItem
        label="My Profile"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate('ProfileStack')}
      />
      <DrawerItem
        label="Size and Fit"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate("CustomerService", {screen : "SizeAndFit"})}
      />
      <DrawerItem
        label="Return and Exchange"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate("CustomerService", {screen : "ReturnAndExchange"})}
      />
      <DrawerItem
        label="Privacy Policy"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate(navigationStrings.PRIVACY_POLICY)}
      />
      <DrawerItem
        label="Terms and Conditions"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate(navigationStrings.TERMS_AND_CONDITIONS)}
      />
      <DrawerItem
        label="Shipment policy"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate(navigationStrings.SHIPMENT_POLICY)}
      />
      <DrawerItem
        label="Contact Infomation"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate(navigationStrings.CONTACT_INFORMATION)}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({

  labelStyle: {
    color: '#fff',
    fontWeight: 12
  }
})