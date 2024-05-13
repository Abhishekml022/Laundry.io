import { View, Text, TextInput, Dimensions, TouchableOpacity, ScrollView, Modal, FlatList, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomTextinput from '../../Common/CustomTextinput'
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import ActionSheet from 'react-native-actionsheet'
import { useNavigation } from '@react-navigation/native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux'
import Snackbar from 'react-native-snackbar'


const Booking = () => {
    const {height,width}=Dimensions.get('screen')
    const [open, setOpen] = useState(false)
    const [visible, setvisible] = useState(false)
    const [Orderid, setOrderid] = useState('')
    const [bookingconfirmed, setbookingconfirmed] = useState(false)
    const userid=useSelector(state=>state.userid)
    // console.warn(userid);
    
    const [Address, setAddress] = useState('')
    const [Quantity, setQuantity] = useState(0)

    const navigation=useNavigation()
    useEffect(() => {
      setTimeout(() => {
        setbookingconfirmed(false)
      }, 5000);
    }, [bookingconfirmed])
    
const orderbooking=async()=>{
await firestore().collection("Orders").add({
Userid:userid,
CollectDT:date,
Qty:Quantity,
Orderstatus:'Ordered',
Created:Date.now(),
Updated:'',
Address:Address
}).then(resp=>{
setOrderid(resp.id);
setbookingconfirmed(true)
setdate('')
setQuantity(0)
setAddress('')
})
}
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

// console.warn(availableslot);

    const actionSheetRef = useRef(null);
    
    const [date, setdate] = useState('')
    const [todaydate, settodaydate] = useState(new Date())

    // console.warn(date);
    const [selected,setselected]=useState()

    const handleclose=(item)=>{
      setAddress(item.Flat_no+', '+item.Housename+', '+item.City+', '+item.State),
      setvisible(false)
    }
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff',padding:10,paddingTop:30}}>
         <TouchableOpacity style={{position:'absolute',top:30,right:15}}>
      <Entypo name="bell" size={32} color="#000"/>

      </TouchableOpacity>
      
      <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000',marginVertical:10}}>Welcome Back!</Text>
        <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:18,lineHeight:20,marginVertical:10}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Text>
        <View style={{marginBottom:30}}>
        <View style={{alignItems:'center',marginVertical:5}}>
            <View style={{height:height*.04,width:width*.24,backgroundColor:'#56db87',alignSelf:'flex-start',marginLeft:15,bottom:-15,zIndex:9,alignItems:'center',justifyContent:'center',elevation:1}}>
<Text style={{color:'#fff',fontWeight:'400',fontSize:17}}>When</Text>
            </View>
        <TextInput style={{width:width*.9,height:width*.20,backgroundColor:'#e8e6e6',padding:10,fontSize:18,justifyContent:'center'}} placeholder='Select Date and Time for Pickup' defaultValue='' value={date!==''?moment(date).format('MMMM Do YYYY, h:mm a'):''} onTouchStart={()=>setOpen(true)}/>
        </View>
        <View style={{alignItems:'center',marginVertical:5}}>
            <View style={{height:height*.04,width:width*.24,backgroundColor:'#56db87',alignSelf:'flex-start',marginLeft:15,bottom:-15,zIndex:9,alignItems:'center',justifyContent:'center',elevation:1}} >
<Text style={{color:'#fff',fontWeight:'400',fontSize:17}}>From</Text>
            </View>
        <TextInput style={{width:width*.9,height:width*.20,backgroundColor:'#e8e6e6',padding:10,fontSize:18,justifyContent:'center'}} value={Address} placeholder='Choose Address' onTouchStart={()=>setvisible(true)}/>
        </View>
        <View style={{alignItems:'center',marginVertical:5}}>
            <View style={{height:height*.04,width:width*.24,backgroundColor:'#56db87',alignSelf:'flex-start',marginLeft:15,bottom:-15,zIndex:9,alignItems:'center',justifyContent:'center',elevation:1}}>
<Text style={{color:'#fff',fontWeight:'400',fontSize:17}}>Quantity</Text>
            </View>
        <TextInput style={{width:width*.9,height:width*.20,backgroundColor:'#e8e6e6',padding:10,fontSize:18,justifyContent:'center'}} placeholder='0 Nos' onChangeText={text=>setQuantity(parseInt(text))}/>
        </View>
        </View>
     <CustomTouchableOpacity name='Confirm Booking' width={200} onPress={orderbooking}/>
<Text style={{fontWeight:'500',fontSize:20,color:'#000'}}>Note:</Text>
<Text style={{lineHeight:20,paddingBottom:50}}>Price is decided by the pickup man at the time of collecting your clothes</Text>
<DatePicker
        modal
        open={open}
        date={todaydate}
        onConfirm={(date) => {
          setOpen(false)
          setdate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    <Modal visible={visible} onRequestClose={()=>setvisible(false)}>
      <View style={{padding:10}}>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'center'}}>
          <TouchableOpacity style={{position:'absolute',left:0,top:5}} onPress={()=>{setvisible(false)}}>                
            <AntDesign name="arrowleft" size={40} color='green' /> 
            </TouchableOpacity>

                <Text style={{textAlign:'center',fontSize:25,color:'#000'}}>Saved Address</Text>
                </View>
<View style={{marginVertical:5}}>
        <FlatList data={data} renderItem={({item,index})=>{
          return(
            


<View >

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
              <TouchableOpacity style={{ padding: 10,borderBottomWidth:.4,height:50}} onPress={()=>handleclose(item)}>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:20,color:'#000',marginLeft:5}}>{item.Flat_no+', '+item.Housename+', '+item.City+', '+item.State} </Text>
            {Address==item.Flat_no+', '+item.Housename+', '+item.City+', '+item.State?<Entypo name="check" size={32} color="green"/>:null}
            </View>
              </TouchableOpacity>
            </Swipeable>
           
              </GestureHandlerRootView>














          
        </View>


          )
        }}  />    
        </View>  
     <CustomTouchableOpacity name='Add Address' width={200}/>

      </View>

    </Modal>


    <Modal visible={bookingconfirmed}>
      <View style={{flex:1,padding:10,alignItems:'center',justifyContent:'center'}}>
      <AntDesign name="checkcircle" size={100} color='green' /> 
       
<Text style={{fontSize:25,fontWeight:'600',color:'#000'}}>Booking Confirmed</Text>
<Text style={{maxWidth:'90%',textAlign:'center',color:"green",fontSize:18}}>Order ID : {Orderid}</Text>
<Text style={{maxWidth:'90%',textAlign:'center',marginTop:10}}>Order will be picked up at scheduled time</Text>
<Text style={{color:'red',fontSize:25,textAlign:'center',marginVertical:20}}onPress={()=>{setbookingconfirmed(false),setvisible(false),navigation.navigate('Orderhistory')}}> Close</Text>



      </View>

    </Modal>
    </ScrollView>
  )
}

export default Booking