import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Routes } from '../themes'
import { useNavigation } from '@react-navigation/native';
import { useLazyGetPostQuery } from '../services/services';
import { useAppSelector } from '../store';

const BlogScreen = () => {

  const [getPost] = useLazyGetPostQuery()
  useEffect(() => {
      getPost()
  }, [])
  const navigation = useNavigation()
  const { isLoading, isError, postsData } = useAppSelector((state) => state.posts);
  console.log('post is ', isLoading, isError, postsData)
  return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Post as never)}>
              <Text>Hello</Text>
          </TouchableOpacity>
      </View>
  );
};

export default BlogScreen;