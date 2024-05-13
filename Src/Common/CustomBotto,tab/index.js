import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useIsFocused, useNavigation } from '@react-navigation/native'




const CustomBottomtab = () => {
const [active, setactive] = useState('home')
    const navigation=useNavigation(0)
  return (
    <View style={{height:50,backgroundColor:'#fff',alignItems:'center',paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>{setactive('home'),navigation.navigate('Home')}}>
      <Octicons name='home' size={30} color={active=='home'?'green':'#abb0ac'}/>
      </TouchableOpacity>
     < TouchableOpacity onPress={()=>{setactive('services'),navigation.navigate('Booking')}}>
     <Ionicons name='list-circle' size={30}  color={active=='services'?'green':'#abb0ac'}/>
      </TouchableOpacity>
     < TouchableOpacity onPress={()=>{setactive('history'),navigation.navigate('Orderhistory')}}>
      <Ionicons name='timer-outline' size={30} color={active=='history'?'green':'#abb0ac'}/>
      </TouchableOpacity>
     < TouchableOpacity onPress={()=>{setactive('more'),navigation.navigate('More')}}>

      <Feather name='more-vertical' size={30} color={active=='more'?'green':'#abb0ac'}/>
</TouchableOpacity>
      
    </View>
  )
}

export default CustomBottomtab