import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const Profile = () => {
    const navigation=useNavigation()
    const profileImage=useSelector(state=>state.profileImage)
    const Firstname=useSelector(state=>state.firstname)
    const Lastname=useSelector(state=>state.lastname)
    const mobilenumber=useSelector(state=>state.mobilenumber)
    const email=useSelector(state=>state.email)




    navigation.setOptions({
        headerShown:true,
        headerTitleStyle:{fontSize:17},
        headerTitleAlign:'center' ,
      
        headerLeft:()=>{
            return(
                <TouchableOpacity style={{padding:10}} onPress={()=>navigation?.navigate('Home')}>
            <Ionicons name="arrow-back" size={27} color='#000'/>
            </TouchableOpacity>
            
    )},
    headerRight:()=>{
        return(
            <TouchableOpacity style={{paddingRight:20}} onPress={()=>navigation?.navigate('Home')}>
        <Text style={{color:'green',fontSize:15,fontWeight:'600'}}>Edit</Text>
        </TouchableOpacity>
        
)}
    
})
    
  return (
    <View style={{alignItems:'center',padding:25,backgroundColor:'#fff',flex:1}}>
        <View style={{height:100,width:100,borderRadius:200/2,backgroundColor:'red',overflow:'hidden'}}>
          <Image source={{uri:profileImage}} style={{height:100,width:100}}/>
        </View>
        <Text style={{fontSize:22,color:'#000',fontWeight:'500',marginVertical:10}}>{Firstname+''+Lastname}</Text>
        <Text style={{fontSize:15,fontWeight:'500'}}>{mobilenumber} </Text>
        <Text style={{fontSize:15,fontWeight:'500'}}>{} </Text>
        <Text style={{fontSize:15,fontWeight:'500'}}>City </Text>


    </View>
  )
}

export default Profile