import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomTouchableOpacity = (props) => {
  return (
    <View style={{alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity style={{width:props.Type=='login'?160 :props?.width?props.width:'100%',backgroundColor:props?.bg?props.bg:'#c9f2ce',padding:15,alignItems:'center',justifyContent:'center',marginVertical:20,opacity:1}} onPress={props.onPress}>
<Text style={{fontSize:20,color:props?.textclr?props.textclr:'green',fontWeight:'500'}}>{props.name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomTouchableOpacity