import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainBanner from './components/MainBanner';
import JobCard from './components/JobCard';
import TopCompanyIcon from './components/TopCompanyIcon';
import TabBar from './components/TabBar';

import { THEME_COLOR } from './utils/Dimensions';

export default function App() {
  
  const demoJob = {
    title: "UI/UX Designer",
    company: "Google LLC",
    location: "Gulshan, Dhaka",
    salary: "40K - 50K /month",
    tags: ["Full Time", "Onsite"],
    logo: require('./assets/images/google.png'), 
  };

  const demoCompanies = [
    { name: "Spotify", logo: require('./assets/images/spotify.png') },
    { name: "Steam", logo: require('./assets/images/steam.png') },
    { name: "Airbnb", logo: require('./assets/images/airbnb.png') },
  ];

  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView style={appStyles.container}>
        <Header />
        <SearchBar />
        <MainBanner />

        <View style={appStyles.sectionHeader}>
            <Text style={appStyles.sectionTitle}>Jobs Near You</Text>
            <TouchableOpacity><Text style={appStyles.seeAllText}>See All</Text></TouchableOpacity>
        </View>
        
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={appStyles.jobsScrollContainer}>
            <JobCard {...demoJob} isFirst={true} />
        </ScrollView>
        
        <View style={appStyles.sectionHeader}>
            <Text style={appStyles.sectionTitle}>Top Company</Text>
            <TouchableOpacity><Text style={appStyles.seeAllText}>See All</Text></TouchableOpacity>
        </View>

        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={appStyles.companiesScrollContainer}
        >
            {demoCompanies.map((company, index) =>(
                <TopCompanyIcon 
                    key={index} 
                    logoUrl={company.logo} 
                    companyName={company.name} 
                />
            ))}
        </ScrollView>

      </ScrollView>

      <TabBar />
    </SafeAreaView>
  );
}

const appStyles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },
  sectionTitle: { 
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#333',
   },
  seeAllText: { 
    fontSize: 14,
     color: THEME_COLOR, 
     fontWeight: '500',
    },
  jobsScrollContainer: { 
    paddingRight: 5 ,
  },
  companiesScrollContainer: { 
    paddingHorizontal: 20,
    paddingBottom: 20, 
  },
});
