import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../Storage/Actions'

const More = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const firstname=useSelector(state=>state.firstname)
    const lastname=useSelector(state=>state.lastname)

    const mobilenumber=useSelector(state=>state.mobilenumber)
    const defaultaddress=useSelector(state=>state.defaultaddress)


    const profileImage=useSelector(state=>state.profileImage)
// console.warn(defaultaddress);
  return (
    <View style={{padding:0,paddingTop:10}}>
        <TouchableOpacity style={{position:'absolute',top:30,right:15}}>
      <Entypo name="bell" size={32} color="#000"/>

      </TouchableOpacity>
      <View style={{flexDirection:'row',borderBottomWidth:11,padding:10, borderBottomColor:'#edf0ee'}}>
        <View style={{height:100,width:100,borderRadius:100/2,backgroundColor:'red',overflow:'hidden'}}>
          <Image source={{uri:profileImage}} style={{height:100,width:100}}/>
        </View>
        <View style={{justifyContent:'center',width:200,marginLeft:10}}>
            <Text style={{fontSize:22,color:'#000'}}>{firstname+lastname}</Text>
            <TouchableOpacity style={{paddingVertical:2}} onPress={()=>navigation.navigate('Profile')}>
            <Text style={{fontSize:14,color:'green'}}>View Profile</Text>

            </TouchableOpacity>

        </View>
      </View>
      <View style={{padding:15}}>
      
        <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}}>
      <Text style={{fontSize:18}}>Phone Number</Text>
      <Text style={{fontSize:18,fontWeight:'400',color:'#000'}}>{mobilenumber}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}} onPress={()=>navigation.navigate('Address')}>
      <Text style={{fontSize:18}}>Address</Text>
      <Text style={{fontSize:18,fontWeight:'400',color:'green'}}>HSS Road, Kazhakoota....</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}} onPress={()=>{navigation.navigate('SavedCards')}}>
      <Text style={{fontSize:18}}>Payments</Text>
      <Text style={{fontSize:18,fontWeight:'400',color:'green'}}>Axis CC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}} onPress={()=>navigation.navigate('Notification')}>
      <Text style={{fontSize:18}}>Notifications</Text>
      <Text style={{fontSize:18,fontWeight:'400',color:'green'}}>allowed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}}>
      <Text style={{fontSize:18}}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}}>
      <Text style={{fontSize:18}}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}}>
      <Text style={{fontSize:18}}>Terms & Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth:.5,padding:5,paddingVertical:20,justifyContent:"space-between"}} onPress={()=>dispatch(signout({}))}>
      <Text style={{fontSize:18,color:'red',fontWeight:'600'}}>Signout</Text>
      </TouchableOpacity>
            </View>
    </View>
  )
}

export default More