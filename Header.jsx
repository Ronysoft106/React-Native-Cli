import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { THEME_COLOR } from '../utils/Dimensions';

const Header = () => (
  <View style={styles.container}>

    <View style={styles.logoRow}>
      <Feather name="zap" size={24} color={THEME_COLOR} />
      <Text style={styles.logoText}>NextJobz</Text>
    </View>

    <TouchableOpacity style={styles.signBtn}>
      <Text style={styles.signText}>Sign in</Text>
    </TouchableOpacity>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: 6,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  signBtn: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  signText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});
export default Header;
