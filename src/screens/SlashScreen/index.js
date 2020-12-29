import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../config/colors';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        source={require('../../../assets/images/bg1.png')}
      />
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo.png')}
          />
          <Image
            style={styles.welcomeImage}
            source={require('../../../assets/images/enjoy.png')}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.heading}>We are what we do</Text>
          <Text style={styles.subHeading}>
            Thousand of people are usign silent moon for smalls meditation{' '}
          </Text>
          <View style={styles.btnWrapper}>
            <PrimaryButton label={'SIGN UP'} />
          </View>
          <Text style={styles.loginLinkWrapper}>
            <Text style={styles.notificationContent}>
              ALREADY HAVE AN ACCOUNT?
            </Text>{' '}
            <Text style={styles.link}>LOG IN</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  bg: {
    position: 'absolute',
  },
  contentContainer: {
    padding: 20,
    marginTop: 30,
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
  },
  welcomeImage: {
    marginTop: 50,
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  heading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  subHeading: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 26,
    textAlign: 'center',
    color: colors.gray,
  },
  btnWrapper: {
    marginTop: 60,
  },
  loginLinkWrapper: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 90,
  },
  notificationContent: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
  },
  link: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
  },
});
