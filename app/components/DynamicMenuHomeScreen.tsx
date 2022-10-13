/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import DynamicComponent from 'react-native-dynamic-render';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/rootReducer';
import {getPosts} from '../redux/slices/getPostsSlice';
import {getUsers} from '../redux/slices/getUsersSlice';

const mapComponents = {
  text: Text, // Or Your custom component
  view: View,
  image: Image,
  touchableOpacity: TouchableOpacity,
  imageBackground: ImageBackground,
};

export const DynamicMenuHomeScreen = () => {
  const {posts} = useSelector((state: RootState) => state.posts);
  const {users, usersLoading} = useSelector((state: RootState) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(users).length && !usersLoading) {
      const user = users.data.filter(function (item: any) {
        return item.isEnabled == 'true';
      });
      dispatch(getPosts(user[0].uri));
    }
  }, [users]);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onRefresh = () => {
    dispatch(getUsers());
  };

  return (
    <View style={styles.container}>
      {usersLoading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading......</Text>
        </View>
      ) : (
        <DynamicComponent
          name={'Component'}
          {...posts}
          mapComponents={mapComponents}
        />
      )}
      {!usersLoading ? (
        <Button onPress={onRefresh} title="Refresh" color="#841584" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
