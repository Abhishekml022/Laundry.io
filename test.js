import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
const MyListItem = ({ item, onDelete }) => {
    
  return (
    <View>
    <GestureHandlerRootView style={{ backgroundColor:'#Dea',paddingTop:50}}>
    
    <Swipeable


      renderRightActions={(progress, dragX) =>  (
        
<View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => onDelete(item)} >
            <Text style={{ color: 'white', paddingHorizontal: 16 }}>Edit</Text>


          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: 'green',}}onPress={() => onDelete(item)} >
            <Text style={{ color: 'white', paddingHorizontal: 16 }}>Delete</Text>


          </TouchableOpacity>
    </View>
      )}
      
    >
      <View style={{ padding: 10,alignSelf:'center',justifyContent:'center' }}>
        <Text style={{maxWidth:120}}>Hello HelloHello Hello </Text>
      </View>
    </Swipeable>
   
      </GestureHandlerRootView>
      </View>
  );
};

export default MyListItem;
