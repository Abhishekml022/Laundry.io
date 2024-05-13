import { View, Text, TouchableOpacity, Touchable, Modal, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomTextinput from '../../Common/CustomTextinput';
import CustomTouchableOpacity from '../../Common/Custom TouchableOpacity';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation')
import Entypo from 'react-native-vector-icons/Entypo'
const ResidentUpdation = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [Address, setAddress] = useState('')
    const [Mapviewer, setMapviewer] = useState(false)
    const {height,width}=Dimensions.get('screen')
    const [NewPosition, setNewPosition] = useState({});
    const getcurrentloction = () => {
      Geolocation.getCurrentPosition(info => {
        setNewPosition({
          latitude: info.coords.latitude ?? 0,
          longitude: info.coords.longitude ?? 0,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        });
      });
    };
  
    useEffect(() => {
      getcurrentloction()
    
      
    }, [])
    useEffect(() => {
     setlocation()
    
      
    }, [NewPosition])
  

    const setlocation=()=>{
      const lat = 37.7749; // Example latitude
  const long = -122.4194; // Example longitude
  
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${NewPosition.latitude},${NewPosition.longitude}&key=AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4`)
    .then((response) => response.json())
    .then((responseJson) => {
      const address = responseJson.results[0].formatted_address;
      setAddress(address);
    })
    .catch((error) => {
      console.error('Error fetching address:', error);
    });
    }
    

    const navigation=useNavigation()
    const handlenavigatenext=()=>{
      if(toggleCheckBox){
      if(Address.trim()!=''){
        navigation.navigate('Drawer')}
      else{
        Snackbar.show({
          text:'Add your Address',backgroundColor:'red'
        })
      }
    }
      
      else{
        Snackbar.show({
          text:'Accept Terms and Conditions to Continue',backgroundColor:'red'
        })
      }
    }

    return (
        <View style={{flex:1}} >
            <View>
        <View style={{padding: 10,paddingVertical:35}}>

          <View style={{paddingHorizontal:10}}>
            <Text style={{fontSize:35,lineHeight:50,fontWeight:'600',color:'#000'}}>Update your resident and continue</Text>
            <Text style={{maxWidth: 270, textAlign: 'justify',fontSize:15,lineHeight:28,marginTop:5}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>

            <CustomTextinput placeholder="Address" Type='Address' onChangeText={text=>{setAddress(text)}} Df={Address}/>
            <TouchableOpacity style={{alignSelf:'flex-end',flexDirection:'row'}} onPress={()=>setMapviewer(true)}>
<FontAwesome6  size ={25} color='#56db67' name='location-dot'/>

                    <Text style={{textAlign:'right',fontSize:16,marginHorizontal:5,color:'green'}}>Select Place by map</Text>
                    </TouchableOpacity>
<View style={{alignSelf:'flex-start',flexDirection:'row',alignItems:'center'}}>

<CheckBox value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}/>
    <Text style={{fontSize:17,marginVertical:20}}>Accept Terms & Conditions</Text>
          </View>
         <CustomTouchableOpacity Type="login" name='Continue' onPress={handlenavigatenext}/>
          
          </View>
          
        </View>
        
        </View>
    <Text style={{textAlign:'center',fontSize:17,marginVertical:5,color:'green',marginTop:20}}>Terms and Conditions</Text>


    <Modal visible={Mapviewer}>
    <View
      Style={{
        flex: 1,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'space-between',
      }}>
    <ScrollView>
    <View>
      <Text>Locationview</Text>
     
      <GooglePlacesAutocomplete
            styles={{
              textInput: {height: 50, width: 150, borderWidth: 1, margin: 10},
              predefinedPlacesDescription: {flex: 1, fontWeight: 'bold'},
            }}
            placeholder="Enter your Street Name"
            onPress={(data, details = null) => {
              console.log(data, details);
              const location = data?.location ?? details.geometry?.location;
              setNewPosition(positiondata);
              setAddress(data.name ?? data.description);
            }}
            query={{
              key: 'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4 ',
              language: 'en',
            }}
            currentLocation={true}
            fetchDetails={true}
            currentLocationLabel="Current location"
            onFail={fail => console.warn('Fail', fail)}
            onNotFound={notfound => {
              console.warn('not found', notfound);
            }}
          />
        </View>
        <MapView
          initialRegion={{
            latitude:10.850516,
            longitude: 76.271080,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: width, height: height, margin: 10}}
          // onMapReady={resp=>{console.warn(resp);}}

          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}>
          <Marker draggable title="You are here" coordinate={NewPosition}  onDragEnd={(e)=>{setNewPosition(e.nativeEvent.coordinate),setMapviewer(false)}} onPress={()=>setMapviewer(false)} >
          <Entypo name="location-pin" size={60} color='green' />
            </Marker>
        </MapView>


     
        
  </ScrollView>
    </View>


    </Modal>
  
         </View>
        
      );
}

export default ResidentUpdation