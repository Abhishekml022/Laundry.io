import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation')
import Entypo from 'react-native-vector-icons/Entypo'

const Locationview = () => {
  const [Address, setAddress] = useState('');
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

// console.warn();
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
  
  return (
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
          <Marker draggable title="You are here" coordinate={NewPosition}  onDragEnd={(e)=>setNewPosition(e.nativeEvent.coordinate)} >
          <Entypo name="location-pin" size={60} color='green' />
            </Marker>
        </MapView>


     
        
  </ScrollView>
    </View>
        )

  
}

export default Locationview