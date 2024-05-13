import { View, Text, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const {height,width}=Dimensions.get('screen')
  const navigation=useNavigation()
    const FlexDetail=[
        
{Body:'Lorem Ipsum is simply dummy text of  industry. Lorem Ipsum has Been',
Title:'Hand wash',
Advantage:'Lorem Ipsum is simply dummy text \nans ans ehdbw qu eqd how acsc ed\nLorem Ipsum is simply dummy text of  industry.',
Drawbacks:'Drawbacks he ewd wuxdnws i c\nwdjcxnddndndn Lorem Ipsum is simply dummy text of  industry.',
Image:require('../../images/Img1.jpg')
},
{Body:'Lorem Ipsum is simply dummy text of  industry. Lorem Ipsum has Been',
Title:'Steaming',
Drawbacks:'Drawbacks he ewd wuxdnws i c\nwdjcxnddndndn Lorem Ipsum is simply dummy text of  industry.',
Image:require('../../images/Img2.jpg')

},
        ]

    
  return (
    <ScrollView style={{flex:1,padding:10,backgroundColor:'#fff'}}>
      <TouchableOpacity style={{position:'absolute',top:30,right:8}}>
      <Entypo name="bell" size={32} color="#000"/>

      </TouchableOpacity>
     <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000',marginTop:35}}>Our Services </Text>
     <Text style={{maxWidth: 285, textAlign: 'justify',fontSize:17,lineHeight:24,marginTop:5}}>
              Lorem Ipsum is simply dummy text of  industry. Lorem Ipsum has Been.
            </Text>
            <FlatList data={FlexDetail} renderItem={({item,index})=>{
                return(
                    <TouchableOpacity style={{marginVertical:20}} onPress={()=>{navigation.navigate('Servicedisplay',{item:item})}}>
                      <Image source={item.Image} style={{height:width*.55 ,width:width*.92,borderRadius:10,resizeMode:'cover'}}/>
                        <Text style={{fontWeight:'500',color:'#000',fontSize:25,marginVertical:10}}>{item.Title}</Text>
                        <Text style={{fontSize:17,lineHeight:20}}>{item.Body}</Text>
                        </TouchableOpacity>
                )
            }}/>
    </ScrollView>
  )
}

export default Home