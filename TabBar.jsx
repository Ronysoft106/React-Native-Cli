import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME_COLOR } from '../utils/Dimensions';


const TabItem = ({ iconName, label, active }) => (
    <TouchableOpacity style={tabBarStyles.tabItem}>
        <Feather name={iconName} size={24} color={active ? THEME_COLOR : '#888'} />
        <Text
  style={[
    tabBarStyles.tabLabel,
    { color: active ? THEME_COLOR : '#888'}
  ]}
>
  {label}

</Text>

    </TouchableOpacity>
);

const TabBar = () => (
  <View style={tabBarStyles.tabBarContainer}>
    
    <TabItem iconName="home" label="Home" active={true} />
    <TabItem iconName="user" label="Profile" />
    
    <TabItem iconName="grid" label="Dashboard" />
    <TabItem iconName="more-horizontal" label="More" />

    <TouchableOpacity style={tabBarStyles.jobsButton}>
      <Ionicons name="briefcase" size={30} color="white" />
    </TouchableOpacity>
  </View>
);


const tabBarStyles = StyleSheet.create({
    tabBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 70, 
      borderTopWidth: 1,
      borderTopColor: '#eee',
      position: 'absolute', 
      bottom: 0,
      left: 0,
      right: 0,
      paddingBottom: 5, 
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 5,
    },
    tabLabel: {
      fontSize: 10,
      marginTop: 2,
      fontWeight: '500',
      color:'#888',
    },
    jobsButton: {
      backgroundColor: THEME_COLOR, 
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      bottom: 25, 
      left: '50%', 
      marginLeft: -30, 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    }
});
export default TabBar;
