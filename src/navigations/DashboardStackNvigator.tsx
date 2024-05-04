import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BlogScreen, PostScreen} from '../screens';
import {Routes} from '../themes';

const Stack = createStackNavigator();

function DashboarStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.blog}>
        
        <Stack.Screen name={Routes.blog} component={BlogScreen} />
        <Stack.Screen name={Routes.Post} component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DashboarStackNavigator;
