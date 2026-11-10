
import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cardContainer}>

          {/* Profile Image */}
          <View style={styles.cardImageContainer}>

            <Image
              style={styles.cardImage}
              source={require('../../assets/images/user.png')}
            />

          </View>

          {/* Profile Name */}
          <Text style={styles.cardName}>
            John Doe
          </Text>

          {/* Profile Occupation */}
          <Text style={styles.cardOccupation}>
            React Native Developer
          </Text>

          {/* Profile Description */}
          <Text style={styles.cardDescription}>
            John is a really good JavaScript developer.
            He loves working with React Native and building
            mobile applications. He enjoys learning new
            technologies and creating amazing applications.
          </Text>

        </View>

      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    paddingHorizontal: 20,
  },

  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
  },

  cardImage: {
    width: 80,
    height: 80,
  },

  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },

  cardOccupation: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },

  cardDescription: {
    fontSize: 11,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
    lineHeight: 16,
    marginTop: 15,
  },

});
