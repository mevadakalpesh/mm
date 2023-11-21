import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getItem} from '@constants/Storage'; 

import OnBordingScreen from '@screens/OnBordingScreen';
import DashboardScreen from '@screens/DashboardScreen';
import LoginScreen from '@screens/LoginScreen';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const  onBordingProcessDone = getItem('onBordingProcessDone');
  let initialRouteName = 'LoginScreen';
  
  // if(onBordingProcessDone != 'Yes'){
  //   initialRouteName = 'OnBordingScreen';
  // }
  
  return (
    <NavigationContainer>
       <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation;