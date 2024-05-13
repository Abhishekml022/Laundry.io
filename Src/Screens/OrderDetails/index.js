import { View, Text, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity'
import StepIndicator from 'react-native-step-indicator';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment';


const Orderdetails = () => {
    const [Orderstatus, setOrderstatus] = useState("Cancelled")
    const [Paymentstatus, setPaymentstatus] = useState("unpaid")

    const [currentPosition, setcurrentPosition] = useState(0)
    const labels = ["Washing","Drying" ,"Ironing","Delivered"];
    const navigation=useNavigation()
    const route=useRoute()
    const {item}=route.params
    // console.warn(item);
    useEffect(() => {
        navigation?.setOptions({
            headerShown:true,
            title:moment(item.CollectDT).format('MMMM Do YYYY, h:mm a'), // update via route
            
            headerLeft:()=>{
                return(
                    <TouchableOpacity style={{padding:10}} onPress={()=>navigation?.navigate('Home')}>
                <Ionicons name="arrow-back" size={30} color='#000'/>
                </TouchableOpacity>
                
        )}
          
        
        
    })
    if(item.Orderstatus=='Ordered'){
setcurrentPosition(0)
    }
    else{
      if(item.Orderstatus=='Completed'){
        setcurrentPosition(4)
            }  else{
              if(item.Orderstatus=='Inprogress'){
                setcurrentPosition(2)
                    }
            }
    }
    
     
    }, [])
    
  return (
    <ScrollView style={{flex:1,backgroundColor:'#fff',padding:15}}>

      <Text style={{fontSize:27,color:'#000',marginVertical:5}}>Order ID</Text>
      <Text style={{fontSize:18,color:'#000',marginVertical:5}}>{item.orderid}</Text>
      
      <View style={{flexDirection:'row', marginVertical:20,justifyContent:'space-between'}}>
        <Text style={{fontSize:27,color:'#000'}}>Total</Text>
        <Text style={{fontSize:25,color:'green'}}>Rs.{item.Total?item.Total:'000'}</Text>
      </View>
{item.Orderstatus=='Ordered'? 
      <View style={{alignSelf:'center',justifyContent:'center',width:260}}>
      <Text style={{fontSize:22,color:'#000',textAlign:'center'}}>Total will be updated once item is picked up</Text>

      </View>:<View>  
       {   item.Paymentstatus=='Paid'? <View style={{borderWidth:1,height:40,width:100,borderRadius:10,justifyContent:'center',alignItems:'center',borderColor:'green',borderStyle:'solid',transform:[{rotate:"-30deg"}],zIndex:99,position:'absolute',top:50,left:100}} >
      <Text style={{fontSize:20,color:'green',fontWeight:'800'}}>Paid</Text>
            </View>:   item.Orderstatus=='Cancelled'? <View style={{borderWidth:1,height:40,width:100,borderRadius:10,justifyContent:'center',alignItems:'center',borderColor:'red',borderStyle:'solid',transform:[{rotate:"-30deg"}],zIndex:99,position:'absolute',top:0,left:100}} >
      <Text style={{fontSize:20,color:'red',fontWeight:'800'}}>Cancelled</Text>
            </View>:null}
      <FlatList data={item.Cartitems} renderItem={({item,index})=>{ //props item needs to be updated here
        return(
          <View style={{width:'100%',borderBottomWidth:.5,padding:10,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:15,fontWeight:'500',color:'#000'}}>{item.FabricType}</Text>
            <Text style={{fontSize:15,fontWeight:'500',color:'#000'}}>{item.Qty} Nos</Text>
            
            <Text style={{fontSize:15,fontWeight:'500',color:'#000'}}>Rs. {item.Qty*item.AmountEA}</Text> 
</View>  
      )
      }}/>
</View>

      
      }
      <Text style={{fontSize:27,color:'#000',marginVertical:25}}>Status</Text>
      <StepIndicator
         currentPosition={currentPosition}
         labels={labels}
         stepCount={labels.length}
         customStyles={{stepIndicatorSize: 25,
            currentStepIndicatorSize: 30,
            separatorStrokeWidth: 2,
            currentStepStrokeWidth: 3,
            stepStrokeCurrentColor: 'green',
            stepStrokeWidth: 3,
            stepStrokeFinishedColor: 'green',
            stepStrokeUnFinishedColor: '#dedede',
            separatorFinishedColor: 'green',
            separatorUnFinishedColor: '#dedede',
            stepIndicatorFinishedColor: 'green',
            stepIndicatorUnFinishedColor: '#ffffff',
            stepIndicatorCurrentColor: '#ffffff',
            stepIndicatorLabelFontSize: 0,
            currentStepIndicatorLabelFontSize: 0,
            labelColor: '#000',
            labelSize: 13,
            currentStepLabelColor: 'green'}}
    />
      <Text style={{fontSize:27,color:'#000',marginVertical:20}}>Delivered To</Text>
      <Text style={{fontSize:18,color:'#000'}}>{item.Address}</Text>

{item.Orderstatus!=='Cancelled'?
    item.Orderstatus=='Ordered'? 
      <CustomTouchableOpacity name='Cancel Booking' bg ='#ffeae8' textclr="red" width={'100%'} onPress={()=>Alert.alert('Are you sure ',"Are you sure to cancel this order?")}/>
    :
    item.Paymentstatus=='Paid'? <CustomTouchableOpacity name='Mail Invoice' bg ='#dfe8e1' textclr="red" width={'100%'} onPress={()=>Alert.alert('Mail Sent !!! ',"Invoice has been send to your mail ")}/>:
    <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>
      <CustomTouchableOpacity name='Mail Invoice' bg ='#dfe8e1' textclr="red" width={'100%'} onPress={()=>Alert.alert('Mail Sent !!! ',"Invoice has been send to your mail ")}/>
      <CustomTouchableOpacity name='Pay Now' textclr="green" width={'100%'} onPress={()=>Alert.alert('Mail Sent !!! ',"Invoice has been send to your mail ")}/>
      </View>
       :null}
    </ScrollView>
  )
}

export default Orderdetails