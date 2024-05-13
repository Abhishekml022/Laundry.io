import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper'
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity'


const Notifications = () => {
    const navigation=useNavigation()
    const [activenotifications, setactivenotifications] = useState(0)
   
    navigation.setOptions({
        headerShown:true,
        title:'',
        headerLeft:()=>{
            return(
                <TouchableOpacity style={{padding:10,paddingHorizontal:15}} onPress={()=>navigation?.navigate('Home')}>
            <Ionicons name="arrow-back" size={30} color='#000'/>
            </TouchableOpacity>
            
    )},
    })
    const cards=[{Name:'Notify me on every Process'
    },{Name:'Notify me on only at Delivery time'
},{Name:'All Notifications'
}]
  return (
    <View style={{flex:1,backgroundColor:'#fff',padding:10}}>
    <View style={{backgroundColor:'#fff'}}>
        <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000',marginVertical:10}}>Notifications</Text>
        <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:15,lineHeight:20}}>
        Choose your Notification Preference
        </Text>
        <FlatList data={cards} renderItem={({item,index})=>{
return(
    <View style={{flexDirection:'row',alignItems:'center',paddingVertical:20,paddingHorizontal:10,marginTop:5,borderBottomWidth:.19}}>
        
        <RadioButton status={ activenotifications == index ? 'checked' : 'unchecked' } onPress={()=>setactivenotifications(index)} color='green' />
        <Text style={{fontWeight:'400',color:'#000',marginVertical:5,fontSize:17,marginLeft:5}}>{item.Name}</Text>

</View>
        
)
        }}/>
        </View>


    </View>

  )
}

export default Notifications