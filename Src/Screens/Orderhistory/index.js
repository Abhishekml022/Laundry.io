import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore, { Filter } from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const Orderhistory = () => {
  const navigation=useNavigation()
  const [active, setactive] = useState('All');
  const [orderstatus, setOrderstatus] = useState('');

  const [Fetcheddata, setFetcheddata] = useState('');

  const userid=useSelector(state=>state.userid)
  const callorders=async()=>{
    if(active=='All'){
await firestore().collection("Orders").where('Userid','==',userid).get().then(snapshot=>{
  if(snapshot.empty){
    setFetcheddata([])
    // console.warn(Fetcheddata);
  }
  else{
     details=[]
    snapshot.forEach(snapshot=>{
      response={orderid:snapshot.id,...snapshot.data()}
      
      details.push(response)
    })
    setFetcheddata(details)
  }
})}
else{
  if(active=='Inprogress'){
    await firestore().collection("Orders").where('Userid','==',userid).where('Orderstatus','==','Inprogress').get().then(snapshot=>{
      if(snapshot.empty){
        setFetcheddata([])
        rn(Fetcheddata);
      }
      else{
         details=[]
        snapshot.forEach(snapshot=>{
          response={orderid:snapshot.id,...snapshot.data()}
          
          details.push(response)
        })
        setFetcheddata(details)
      }
    })



  }
  else{
    await firestore().collection("Orders").where('Userid','==',userid).where('Orderstatus','==','Completed').get().then(snapshot=>{
      if(snapshot.empty){
        setFetcheddata([])
        // console.warn(Fetcheddata);
      }
      else{
         details=[]
        snapshot.forEach(snapshot=>{
          response={orderid:snapshot.id,...snapshot.data()}
          
          details.push(response)
        })
        setFetcheddata(details)
      }
    })

  }
}
// console.warn(Fetcheddata);
  }
 
useEffect(() => {
 callorders()
}, [active])

  return (
    <ScrollView style={{padding: 15, flex: 1}}>
      <Text
        style={{
          fontSize: 35,
          lineHeight: 50,
          fontWeight: '600',
          color: '#000',
          marginVertical: 10,
        }}>
        History
      </Text>
      <Text
        style={{
          maxWidth: 270,
          textAlign: 'justify',
          fontSize: 18,
          lineHeight: 20,
          marginVertical: 10,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 105,
              height: 60,
              backgroundColor: active == 'All' ? '#56db87' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#56db87',
            }}
            onPress={() => setactive('All')}>
            <Text style={{color: 'green', fontSize: 20, fontWeight: '600'}}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 115,
              height: 60,
              backgroundColor: active == 'Inprogress' ? '#56db87' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#56db87',
            }}
            onPress={() => setactive('Inprogress')}>
            <Text style={{color: 'green', fontSize: 20, fontWeight: '600'}}>
              In Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 105,
              height: 60,
              backgroundColor: active == 'Delivered' ? '#56db87' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#56db87',
            }}
            onPress={() => setactive('Delivered')}>
            <Text style={{color: 'green', fontSize: 20, fontWeight: '600'}}>
              Delivered
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Fetcheddata}
        ListEmptyComponent={()=>{
          return(
          <View style={{alignItems:'center',justifyContent:'center',padding:15}}>
            <Text style={{color:'red',fontSize:20,fontWeight:'800'}}>No orders to show</Text>
          </View>
          )
        }}
        renderItem={({item, index}) => {
          // console.warn("ITemis",item.Orderstatus);
          return (
            <ScrollView>
            <TouchableOpacity
              style={{
                marginVertical: 12,
                marginHorizontal: 5,
                padding: 10,
                height:120,borderColor:'green',borderWidth:1
              }} 
             onPress={()=>navigation.navigate("OrderDetails",{item:item})}
             >
              <Text style={{fontSize: 18, color: '#000'}}>{moment(item.CollectDT).format('MMMM Do YYYY, h:mm a')}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:10}}>
                <Text style={{fontSize: 18, color: '#000', fontWeight: '800'}}>
                  {item.Qty} Qty
                </Text>
                <Text style={{color:item.Orderstatus=='Completed'?'green':'red',fontSize:18}}>{item.Orderstatus}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                  <View style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                    {item.orderstatus!='Ordered'?<>
                <Text style={{fontSize:18}}>Total : </Text>
                <Text style={{fontSize:18,color:'#000',fontWeight:'800'}}>Rs. {item.Total}</Text></>:null}

                </View>
                <Text style={{color:item.Paymentstatus=='Paid'?'green':'red',fontSize:18}}>{item.Paymentstatus}</Text>
              </View>
            </TouchableOpacity>
            </ScrollView>
          );
        }}
      />
    </ScrollView>
  );
};

export default Orderhistory;
