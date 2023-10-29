import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getItem} from './constants/Storage'; 
import OnBordingScreen from './screens/OnBordingScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const  onBordingProcessDone = getItem('onBordingProcessDone');
  let initialRouteName = 'DashboardScreen';
  
  if(onBordingProcessDone != 'Yes'){
    let initialRouteName = 'OnBordingScreen';
  }
  
  return (
    <NavigationContainer>
       <Stack.Navigator 
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="OnBordingScreen" component={OnBordingScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  )
}
0
export default AppNavigation;