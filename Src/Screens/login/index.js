import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import CustomTextinput from '../../Common/CustomTextinput';
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';
import { login } from '../../Storage/Actions';

const Login = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const [Username, setUsername] = useState(0)
    const [Password, setPassword] = useState('')
    const [Textinputclr, setTextinputclr] = useState('#e8e6e6')
  //  console.warn(typeof(Username),Password);
    const logincheck=async()=>{
  
      if(Username!==0 &&Password.trim()!==''){
firestore().collection('Users').where("Mobilenumber",'==',Username).where("Password",'==',Password).get().then(snapshot=>{
if(snapshot.empty){
Snackbar.show({
  text:'Invalid Username or Password',
  backgroundColor:'red',

})
}
else{
  snapshot.forEach(snapshot=>{
  const response=snapshot.data()


Snackbar.show({
  text:'Login Successfull',
  backgroundColor:'green',
  
})
dispatch(login({
  firstname: response.Firstname,
  lastname: response.Lastname,
  email: response.email,
  mobilenumber:response.Mobilenumber,
  userid:snapshot.id,
  profileImage:response.profileImage
}) )
  })
navigation.navigate("Verification")

}

})}
else{
setTextinputclr('#f77e84')  
setTimeout(() => {
setTextinputclr('#e8e6e6')  
  
}, 200);

}
    }
  return (
    <View >
    <View style={{padding: 10,paddingVertical:16}}>
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
        <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000'}}>Welcome Back!</Text>
        <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:18,lineHeight:28,marginTop:5}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
        <CustomTextinput placeholder="Mobile Number" Type='mobile' color={Textinputclr} onChangeText={text=>setUsername(parseInt(text))}/>
        <CustomTextinput secureText={'true'} placeholder="Password"Type='Password'color={Textinputclr} onChangeText={text=>setPassword(text)}/>
<Text style={{textAlign:'right',fontSize:16,marginVertical:5}}>Forgot Password?</Text>
     <CustomTouchableOpacity Type="login" name='Login' onPress={logincheck}/>
<Text style={{textAlign:'center',fontSize:17,marginVertical:5}}>Need an account?</Text>
      </View>
      
    </View>
    <View style={{justifyContent:'flex-end'}}>
    <CustomTouchableOpacity name='Signup' textclr="#fff" bg="#56db67" onPress={logincheck}/>
    </View>
    </View>
  );
};

export default Login;
