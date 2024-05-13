import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Address = () => {
    const data=[{
        key:1,
        Flat_no:40,
        Housename:'Hello',
        City:'Trivandrum',
        State:'Kerala',
  
      },{
        key:2,
        Flat_no:440,
        Housename:'Bello',
        City:'Kvandrum',
        State:'Keraala',
  
      }]
  const [defaultaddress, setdefaultaddress] = useState(0)
  const navigation=useNavigation()
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
  return (<View style={{padding:10,backgroundColor:'#fff',flex:1}}>

<Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000',marginVertical:10}}>Address</Text>
        <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:15,lineHeight:20}}>
        choose your default Pickup address
        </Text>
    <FlatList data={data} renderItem={({item,index})=>{
        return(
    <GestureHandlerRootView style={{paddingTop:5,justifyContent:'center',width:'100%'}}>
    
    <Swipeable
             renderRightActions={(progress, dragX) =>  (
        
<View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{backgroundColor: 'red',padding:16}} onPress={() => Alert.alert('item')} >
            <Text style={{ color: 'white' }}>Edit</Text>


          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: 'green',padding: 16}}onPress={() => Alert.alert('item')} >
            <Text style={{ color: 'white'}}>Delete</Text>


          </TouchableOpacity>
    </View>
      )}
      
    >
      <View style={{ padding: 10,borderBottomWidth:.4,height:50,flexDirection:'row'}}>
      <RadioButton status={ defaultaddress == index ? 'checked' : 'unchecked' } onPress={()=>setdefaultaddress(index)} color='green' />
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:18,color:'#000',marginLeft:5}}>{item.Flat_no+', '+item.Housename+', '+item.City+', '+item.State} </Text>
    {Address==item.Flat_no+', '+item.Housename+', '+item.City+', '+item.State?<Entypo name="check" size={32} color="green"/>:null}
    </View>
      </View>
    </Swipeable>
   
      </GestureHandlerRootView>

    )
}}/>
  </View>

  )
}

export default Address