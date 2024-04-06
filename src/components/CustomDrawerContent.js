import React from 'react';
import {  DrawerContentScrollView,  DrawerItem} from '@react-navigation/drawer';

import { Image, StyleSheet, View, Text } from 'react-native';
import imagePath from '../config/imagePath';
import navigationStrings from '../config/navigationStrings';
import { textScale } from '../config';


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
          <Text style={{ fontSize: textScale(15), color: '#fff' }} >Andks Dbnsjndks</Text>
          <Text style={{ fontSize: textScale(12) , color: '#CDCDCD' }} >jhds@gmakjkds.com</Text>
        </View>
      </View>
      <View style={{height: 0.5, backgroundColor: '#9A9A9A', marginHorizontal: 20}} >

      </View>


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
        onPress={() => navigation.navigate("LegalStack", {screen: "PrivacyPolicy"})}
      />
      <DrawerItem
        label="Terms and Conditions"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate("LegalStack", {screen: "TermsAndConditions"})}
      />
      <DrawerItem
        label="Shipment policy"
        labelStyle={styles.labelStyle}
        onPress={() => navigation.navigate("LegalStack", {screen: "ShipmentPolicy"})}
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
    fontWeight: 'bold'
  }
})