import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
const Splash = () => {
  const {height,width}=Dimensions.get('screen')
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <View style={{backgroundColor:'#56db67',padding:15,borderRadius:10,alignItems:'center',justifyContent:'center'}} >

<Text style={{color:"#fff",fontSize:25,textAlign:'center',fontWeight:'bold'}}>Laundry.io</Text>
      </View>
    </View>
  )
}

export default Splash