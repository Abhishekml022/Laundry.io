

    import {View, Text, TouchableOpacity, Image, TextInput, ScrollView, Alert, ActivityIndicator} from 'react-native';
    import React, { useRef, useState } from 'react';
    import CustomTextinput from '../../Common/CustomTextinput';
    import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity';
    import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { useDispatch } from 'react-redux';
import { verification } from '../../Storage/Actions';
    
    const Verification = () => {
        const [animating, setanimating] = useState(false)
        const [Otp, setOtp] = useState('')
        const [Otp1, setOtp1] = useState('')
        const [Otp2, setOtp2] = useState('')
        const [Otp3, setOtp3] = useState('')
        const [Otp4, setOtp4] = useState('')

        // console.warn(Otp);

        const navigation=useNavigation()
        const Firsttext = useRef();
        const dispatch=useDispatch()
        const Secondtext = useRef();
        const Thirdtext = useRef();
        const Fourthtext = useRef();
const verifyotp=()=>{
  if((Otp1,Otp2,Otp3,Otp4)!==''){
    setanimating(true)
    setOtp(Otp1+Otp2+Otp3+Otp4)
    setTimeout(() => {
      setOtp('')
        setanimating(false)
dispatch(verification({}))
    }, 3000);}
    else(Snackbar.show({
      text:'Pls fill all fields'
    }))
}
      return (
        <ScrollView style={{backgroundColor:'#fff'}} >

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
            <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000'}}>Verification... </Text>
            <Text style={{maxWidth: 285, textAlign: 'justify',fontSize:17,lineHeight:28,marginTop:5}}>
              Lorem Ipsum is simply dummy text of  industry. Lorem Ipsum has Been.
            </Text>
            <View style={{marginLeft:50}}>
           <Image source={require('../../images/verification.png')} style={{height:250,width:250,resizeMode:'contain',alignSelf:'center'}}/>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput ref={Firsttext}maxLength={1} style={{height:50,width:65,backgroundColor:'#e8e6e6',textAlign:'center',fontSize:25}} keyboardType= 'phone-pad' onTextInput={()=>Secondtext.current.focus()}  blurOnSubmit={false} onChangeText={text=>setOtp1(Otp+text)} value={Otp1}/>
            <TextInput ref={Secondtext}maxLength={1} style={{height:50,width:65,backgroundColor:'#e8e6e6',alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:25}} keyboardType= 'phone-pad'onTextInput={()=>Thirdtext.current.focus()} onChangeText={text=>setOtp2(Otp+text)}  blurOnSubmit={false} value={Otp2}/>

            <TextInput ref={Thirdtext}  maxLength={1} style={{height:50,width:65,backgroundColor:'#e8e6e6',alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:25}}keyboardType= 'phone-pad' onTextInput={()=>Fourthtext.current.focus()} onChangeText={text=>setOtp3(Otp+text)} value={Otp3} blurOnSubmit={false}/>

            <TextInput ref={Fourthtext} maxLength={1} style={{height:50,width:65,backgroundColor:'#e8e6e6',alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:25}}keyboardType= 'phone-pad' onTextInput={()=>Fourthtext.current.blur()} onChangeText={text=>setOtp4(Otp+text)} value={Otp4}/>

           </View>
    <Text style={{textAlign:'right',fontSize:17,marginVertical:5,color:'green'}} onPress={()=>{setOtp1(''),setOtp2(''),setOtp3(''),setOtp4(''),setOtp(''),Alert.alert("Otp send","Otp resended Success"),Firsttext.current.focus()}}>Resend Otp</Text>

         <CustomTouchableOpacity Type="login" name='Verify' onPress={verifyotp}/>
    {animating?<>
    <ActivityIndicator animating={animating} size={'large'}/>
    <Text style={{alignSelf:'center'}}>Verifying Otp</Text></>:null}

          </View>
          
        </View>

        <View style={{justifyContent:'flex-end'}}>
        </View>
        </ScrollView>
      );
    };
    
    
export default Verification