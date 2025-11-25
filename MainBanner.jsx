import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { width, THEME_COLOR } from '../utils/Dimensions';

const MainBanner = () => (
  <View style={styles.bannerContainer}>
    
    <View style={styles.textColumn}>
      <Text style={styles.futureText}>
        The future is for{'\n'}
        those who take the{'\n'}
        next step
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2,102</Text>
          <Text style={styles.statLabel}>Active Jobs</Text>
        </View>

        <View style={styles.statDivider} />

        <View style={styles.statItem}>
          <Text style={styles.statNumber}>702</Text>
          <Text style={styles.statLabel}>Organizations</Text>
        </View>
      </View>
    </View>
<Image
  source={require('../../assets/images/my_phot.png')}
  style={styles.profileImage}
/>

    
  </View>
);

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: THEME_COLOR,
    borderRadius: 18,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    height: width * 0.5,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  textColumn: {
    zIndex: 2,
    width: '60%',
  },

  futureText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  statItem: {
    marginRight: 25,
  },

  statNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  statLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 3,
  },

  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 10,
  },

  profileImage: {
    position: 'absolute',
    right: -15,
    bottom: -5,
    height: '110%',
    width: '55%',
    resizeMode: 'contain',
  },
});

export default MainBanner;
