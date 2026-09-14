import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import onboarding01 from '../assets/images/onboarding-1.png';

const Onboarding01 = () => {
  return (
    <View style={styles.container}>
      <Image source={onboarding01} style={styles.image} resizeMode="contain" />
      <View style={styles.container_2}>
        <Text style={styles.text_title}>Discover Events</Text>
        <Text style={styles.text_description}>
          Find and join events that match your interests and passions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    width: '100%',
    height: 812,
  },
  container_2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#5669FF',
    height: 288,
    width: '100%',
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    paddingHorizontal: 20,
    paddingTop: 48,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: -100,
  },
  text_title: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 34,
    letterSpacing: 0,
    textAlign: 'center',
    fontWeight: '500',
  },
  text_description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 24,
  },
});

export default Onboarding01;
