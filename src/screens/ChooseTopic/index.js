import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../config/colors';

const ChooseTopic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require('../../../assets/images/bg2.png')}
      />
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>What Brings You</Text>
        <Text style={styles.subheading}>To Silent Moon</Text>
        <Text style={styles.title}>Choose a topic to focus on</Text>
      </View>
    </View>
  );
};

export default ChooseTopic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: 15,
  },
  headingWrapper: {
    marginTop: 50,
    padding: 15,
  },

  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.heading,
  },
  subheading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 28,
    color: colors.heading,
    paddingTop: 15,
  },
  title: {
    color: colors.gray,
    fontFamily: 'HelveticaNeue',
    fontSize: 20,
    marginTop: 10,
  },

  bgImage: {
    position: 'absolute',
    top: '15%',
  },
});
