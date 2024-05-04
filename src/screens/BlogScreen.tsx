import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Routes } from '../themes'
import { useNavigation } from '@react-navigation/native';

const BlogScreen = () => {
    const nav = useNavigation()
  return (
    <View>
         <TouchableOpacity onPress={() => nav.navigate(Routes.Post as never)}>
                <Text>next page</Text>
            </TouchableOpacity>
        
      <Text>BlogScreen</Text>
    </View>
  )
}

export default BlogScreen

const styles = StyleSheet.create({})