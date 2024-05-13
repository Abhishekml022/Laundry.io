import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomTextinput from '../../Common/CustomTextinput';
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation=useNavigation()
  return (
    <View >
    <View style={{padding: 10,paddingVertical:20}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#56db67',
          padding: 15,
          borderRadius: 10,
          width: 140,
          marginVertical: 20,
          marginHorizontal: 10,
        }}
        onPress={() => navigation.navigate('Drawer')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 23,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Laundry.io
        </Text>
      </TouchableOpacity>
      <View style={{paddingHorizontal:10}}>
        <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000'}}>Signup... </Text>
        <Text style={{maxWidth: 285, textAlign: 'justify',fontSize:18,lineHeight:28,marginTop:5}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's 
        </Text>
        <CustomTextinput placeholder="Name"/>
        <CustomTextinput placeholder="Mobile Number" Type='mobile'/>
        <CustomTextinput secureText={'true'} placeholder="Password"Type='Password'/>
     <CustomTouchableOpacity Type="login" name='Signup' onPress={()=>navigation.navigate('Verification')}/>
<Text style={{textAlign:'center',fontSize:17,marginVertical:5}}>Already have an account?</Text>
      </View>
      
    </View>
    <View style={{justifyContent:'flex-end'}}>
    <CustomTouchableOpacity name='Login' textclr="#fff" bg="#56db67" onPress={()=>navigation.navigate('Login')}/>
    </View>
    </View>
  );
};

export default Signup;
