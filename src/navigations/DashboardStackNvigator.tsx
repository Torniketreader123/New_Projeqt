import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { BlogScreen, PostScreen, EditPostScreen, BlogDetailScreen } from '../screens';
import { ScreenRoutes } from '../themes';


const Stack = createStackNavigator();

function DashboarStackNavigator() {
  return (
    <NavigationContainer>
     <Stack.Navigator
                screenOptions={{
                    headerShown: false, // Hide default header
                }}
                initialRouteName={ScreenRoutes.blog}
            >
                <Stack.Screen name={ScreenRoutes.blog} component={BlogScreen} />
                <Stack.Screen name={ScreenRoutes.blogDetail} component={BlogDetailScreen} />
                <Stack.Screen name={ScreenRoutes.addPost} component={PostScreen} />
                <Stack.Screen name={ScreenRoutes.editPost} component={EditPostScreen} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DashboarStackNavigator;
