import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { moderateScale, moderateScaleVertical, textScale } from '../../../config';

const Categories = (props) => {
const item = props.item
    return (
        <TouchableOpacity style={{ height: moderateScale(74), width: moderateScale(79), alignItems: 'center', marginVertical: moderateScaleVertical(24), marginRight: moderateScale(5) }} >
            <View style={{ marginBottom: moderateScaleVertical(10) }} >
                <Image
                    style={{ height: moderateScale(51), width: moderateScale(51) }}
                    source={item.categoryImage} />
            </View>
            <Text style={{ fontSize: textScale(12), fontFamily: 'SpaceMono-Bold' }} >{item.categoryName}</Text>
        </TouchableOpacity>
    )
}

export default Categories