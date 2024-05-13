import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Splash from '../Splash'
import { createDrawerNavigator } from '@react-navigation/drawer';
import InitialSlider from '../initialslider1';
import Login from '../login';
import Signup from '../Signup';
import Verification from '../OtpVerification';
import ResidentUpdation from '../Residentupdation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Servicedisplay from '../Servicedisplay';
import Booking from '../Booking';
import Orderdetails from '../OrderDetails';
import CustomBottomtab from '../../Common/CustomBotto,tab';
import Orderhistory from '../Orderhistory';
import More from '../More';
import Profile from '../Profile';
import SavedCards from '../SavedCards';
import Notifications from '../Notifications';
import Address from '../Address';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../Storage/Store';


const App=()=>{
    return(
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    )
}
const AppNavigator = () => {
    const stack=createNativeStackNavigator()
    const [loading, setloading] = useState(true)
  const isloggedin=useSelector(state=>state.isloggedin)
  const isverification=useSelector(state=>state.isverification)
//   console.warn(isverification);

setTimeout(() => {
    setloading(false)
}, 5000);
  return (
   <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
        {loading?
        <stack.Screen name="Splash" component={Splash}/>:<>
         
{isloggedin?(<>
    {isverification?
         <stack.Screen name="Residentupdation" component={ResidentUpdation}/> :
<stack.Screen name="Verification" component={Verification}/>}
        <stack.Screen name="Drawer" component={Drawerbar}/></>
    ):(<>
     <stack.Screen name='Slider' component={InitialSlider}/>
        <stack.Screen name="Login" component={Login}/>
        <stack.Screen name="Signup" component={Signup}/>
     </>)}
     
      

        </>}
    </stack.Navigator>
   </NavigationContainer>
  )
}
const Drawer=createDrawerNavigator()
const Drawerbar=()=>{
    const navigation=useNavigation()
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
<Drawer.Screen name='Footer' component={Footer}/>
<Drawer.Screen name='Servicedisplay' component={Servicedisplay}/>
<Drawer.Screen name='Profile' component={Profile}/>
<Drawer.Screen name='SavedCards' component={SavedCards}/>
<Drawer.Screen name='Notification' component={Notifications}/>
<Drawer.Screen name='Address' component={Address}/>








        </Drawer.Navigator>
    )


}
const BottomTab=createBottomTabNavigator()
const Footer=()=>{
    return(
        <BottomTab.Navigator screenOptions={{headerShown:false}} tabBar={()=><CustomBottomtab/>}>
            <BottomTab.Screen name='Home' component={Home}/>
<BottomTab.Screen name='OrderDetails' component={Orderdetails}/>
<BottomTab.Screen name='Orderhistory' component={Orderhistory}/>
<BottomTab.Screen name='More' component={More}/>

<BottomTab.Screen name='Booking' component={Booking}/>


        </BottomTab.Navigator>
    )
}
export default App