import { View, Text, TextInput, Dimensions } from 'react-native'
import React from 'react'
const CustomTextinput = (props) => {
const {height,width}=Dimensions.get('screen')

  return (
    <View style={{marginVertical:10,backgroundColor:props?.color?props.color:'#e8e6e6',flexDirection:'row',alignItems:'center',padding:2}}>
      {props.Type=='mobile'?  <Text style={{fontSize:15,color:'#000'}}>+91</Text>:null}
     <TextInput style={{width:width*.89,height:props.Type=='Address'?height*.25:height*.07,fontSize:16,textAlignVertical:props.Type=='Address'?'top':'center'}}multiline={props.Type=='Address'?true:false} secureTextEntry={props?.secureText=='true'?true:false} placeholder={props?.placeholder} keyboardType={props.Type=='mobile'?'number-pad':'default'} onChangeText={props?.onChangeText} value={props?.Df?props.Df:null}/>
    </View>
  )
}

export default CustomTextinput