import { View, Text, ScrollView, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Servicedisplay = () => {
    const {height,width}=Dimensions.get('screen')
    const route=useRoute()
   const {item}=route?.params
    // console.warn(item);
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
    <ImageBackground source={item.Image} style={{height:width*.75,width:width,resizeMode:'cover'}}>

        </ImageBackground>
        <View style={{padding:15,paddingBottom:100}}>
      <Text style={{fontSize:23,fontWeight:'600',color:'#000'}}>{item.Title}</Text>
      <Text style={{lineHeight:25,fontSize:17,fontWeight:'400',textAlign:'justified',marginVertical:10}}>{item.Body}</Text>

      <Text style={{fontSize:23,fontWeight:'600',color:'#000',marginVertical:10,marginTop:20}}>Advantages</Text>
      <Text style={{lineHeight:25,fontSize:17,fontWeight:'400',textAlign:'justified'}}>{item.Advantage}</Text>

      <Text style={{fontSize:23,fontWeight:'600',color:'#000',marginTop:20,marginVertical:10}}>Drawbacks</Text>
      <Text style={{lineHeight:25,fontSize:17,fontWeight:'400',textAlign:'justified'}}>{item.Drawbacks}</Text>

      </View>
    </ScrollView>
  )
}

export default Servicedisplay