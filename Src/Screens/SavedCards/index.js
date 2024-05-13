import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RadioButton } from 'react-native-paper'
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity'


const SavedCards = () => {
    const navigation=useNavigation()
    const [activecardindex, setactivecardindex] = useState(0)
    // console.warn(activecardindex);
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
    const cards=[{Cardnum:"5500 7700 5511",
        Type:'Mastercard',
        Name:'Axis Card Credit'
    },{Cardnum:"4400 7700 7798",
    Type:'Visa',
    Name:'Sbi Card'
}]
  return (
    <View style={{flex:1,backgroundColor:'#fff',padding:10}}>
    <View style={{backgroundColor:'#fff'}}>
        <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000',marginVertical:10}}>Saved Cards</Text>
        <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:15,lineHeight:20}}>
        Choose your Default Payment Card
        </Text>
        <FlatList data={cards} renderItem={({item,index})=>{
return(
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10,marginTop:5,borderBottomWidth:.19}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton status={ activecardindex == index ? 'checked' : 'unchecked' } onPress={()=>setactivecardindex(index)} color='green' />
        <View style={{marginHorizontal:5}}>
        <Text style={{color:'#000'}}>{item.Name}</Text>
        <Text style={{fontWeight:'700',color:'#000',marginVertical:5,fontSize:18}}>{item.Cardnum}</Text>
</View>
</View>

<Image source={require('../../images/mastercard.png')} style={{height:30,width:50,resizeMode:'contain'}}/>
        </View>
)
        }}/>

<CustomTouchableOpacity name='+ Add New' Type="login"/>

    </View>
    </View>
  )
}

export default SavedCards