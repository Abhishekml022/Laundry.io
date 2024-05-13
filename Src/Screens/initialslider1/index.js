import {View, Text, Image, ImageBackground, StyleSheet, Alert} from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const InitialSlider = () => {
  const [dotcolor, setdotcolor] = useState('green')
  const isloggedin=useSelector(state=>state.isloggedin)
  const slides = [
    {
      key: 1,
      title: 'Title 1 hewrndwoe',
      text: 'Description.ewjfwSay something cool Description. ewjf wSay something cool Description.ew jfwS ay someth ing cool Description.ewjfwSay something cool Description. ewjfwSay something cool',
image:require('../../Assets/images/1.jpg'),
      color: '#56db67',
    },
    
    {
      key: 2,
      title: 'Title 2',
      text: 'Description.ewjfwSay something cool Description. ewjf wSay something cool Description.ew jfwS ay someth ing cool Description.ewjfwSay something cool Description. ewjfwSay something cool',
      color: '#fff',
image:require('../../Assets/images/1.jpg'),

      Type:true
    },
  ];
  const nextLabel=()=>{
    return(<Text style={{color:'#56db67',fontSize:25}}>Next </Text>)
  }

  const renderItem=({item,index})=>{
    return  <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            overflow:'hidden'
          }}>
            <ImageBackground source={item.image} style={{height:430,width:400,paddingVertical:70,padding:10}}> 
<Text style={{color:'#fff',fontWeight:'bold',fontSize:35,maxWidth:250}}>We clean your clothes</Text>
<Text style={{color:'#fff',fontWeight:'600',fontSize:18,maxWidth:330}}>Alienwash leo is a baad ass Alienwash leo is a baad ass Alienwash leo is a baad ass </Text>

</ImageBackground>
{item.Type?
<View style={styles.triangleCorner1}></View>
  :null}
<View>

{/* <View style={{borderTopRightWidth:450,borderTopWidth:400,borderTopColor:'transparent',borderRightColor:'transparent',borderLeftColor:'red',marginLeft:3,top:-50,backgroundColor:'green'}}/> */}

<View style={styles.container}>
    </View>











<View style={{backgroundColor:item.color,padding:5,borderRadius:5,alignItems:'center',justifyContent:'center',width:120,height:50,marginLeft:15,top:-25}}>

<Text style={{color:"#000",fontSize:20,textAlign:'center',fontWeight:'bold'}}>Laundry.io</Text>
      </View>


          <Text style={{fontSize: 18, textAlign: 'justify',marginHorizontal:5,alignSelf:'center',lineHeight:32}}>
            {item.text}
          </Text>
        </View>
        </View>


    }

  const navigation=useNavigation()
  return (
    <View style={{flex:1}}>


      <AppIntroSlider
        data={slides}
        renderItem={renderItem} activeDotStyle={{backgroundColor:dotcolor}} onDone={()=>{isloggedin?navigation.navigate('Drawer'):navigation.navigate('Login')}} renderNextButton={nextLabel}
               />
    </View>
  );}
  const styles = StyleSheet.create({
    // ... (other styles)
  
   
  
    triangleCorner1: {
      position: 'absolute',
      top: 180,
      left: -200,
      width: 1000,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 1400,
      borderBottomWidth: 600,
      // borderLeftWidth: 200,

      borderRightColor: 'transparent',
      borderBottomColor: '#56db67',
    },
  
      });

export default InitialSlider;
