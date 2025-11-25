import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { THEME_COLOR } from '../utils/Dimensions';

const SearchBar = () => (
  <View style={styles.container}>
    <Feather name="search" size={20} color="#888" style={styles.icon}/>

    <TextInput
      placeholder="Search for a job or company"
      style={styles.input}
      placeholderTextColor="#888"/>

    <TouchableOpacity style={styles.filterBtn}>
      <Feather name="sliders" size={20} color={THEME_COLOR} />
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginHorizontal: 20,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  filterBtn: {
    padding: 5,
  },
});
export default SearchBar;
