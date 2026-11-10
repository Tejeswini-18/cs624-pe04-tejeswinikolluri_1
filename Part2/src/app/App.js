
import React, { Component } from 'react';

import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView
} from 'react-native';

// Six profile records
const profiles = [
  {
    id: 1,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a JavaScript developer who enjoys building mobile applications.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    occupation: 'UI Designer',
    description: 'Jane designs creative and user-friendly interfaces.'
  },
  {
    id: 3,
    name: 'Alex Brown',
    occupation: 'Software Engineer',
    description: 'Alex develops modern software applications.'
  },
  {
    id: 4,
    name: 'David Wilson',
    occupation: 'Data Analyst',
    description: 'David analyzes data and discovers useful insights.'
  },
  {
    id: 5,
    name: 'Sarah Lee',
    occupation: 'Web Developer',
    description: 'Sarah builds responsive and interactive websites.'
  },
  {
    id: 6,
    name: 'Chris Martin',
    occupation: 'Mobile Developer',
    description: 'Chris creates applications for mobile devices.'
  }
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expandedProfileId: null
    };
  }

  // Expand or collapse a profile
  toggleProfile = (id) => {
    this.setState((previousState) => ({
      expandedProfileId:
        previousState.expandedProfileId === id ? null : id
    }));
  };

  // Display an individual profile card
  renderProfileCard(profile) {

    const isExpanded =
      this.state.expandedProfileId === profile.id;

    return (
      <Pressable
        key={profile.id}
        onPress={() => this.toggleProfile(profile.id)}
        style={[
          styles.cardContainer,
          isExpanded ? styles.expandedCard : styles.thumbnailCard
        ]}
      >

        {/* Profile Image */}
        <View
          style={[
            styles.cardImageContainer,
            isExpanded
              ? styles.expandedImageContainer
              : styles.thumbnailImageContainer
          ]}
        >
          <Image
            style={[
              styles.cardImage,
              isExpanded
                ? styles.expandedImage
                : styles.thumbnailImage
            ]}
            source={require('../../assets/images/user.png')}
            resizeMode="contain"
          />
        </View>

        {/* Profile Name */}
        <Text
          style={[
            styles.cardName,
            isExpanded ? styles.expandedName : styles.thumbnailName
          ]}
        >
          {profile.name}
        </Text>

        {/* Occupation */}
        <Text
          style={[
            styles.cardOccupation,
            isExpanded
              ? styles.expandedOccupation
              : styles.thumbnailOccupation
          ]}
        >
          {profile.occupation}
        </Text>

        {/* Description - visible only when expanded */}
        {isExpanded && (
          <Text style={styles.cardDescription}>
            {profile.description}
          </Text>
        )}

      </Pressable>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          contentContainerStyle={styles.gallery}
        >

          {profiles.map((profile) =>
            this.renderProfileCard(profile)
          )}

        </ScrollView>

      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 65,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },

  cardContainer: {
    backgroundColor: profileCardColor,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 12,
    padding: 10,
  },

  thumbnailCard: {
    width: '44%',
    height: 150,
  },

  expandedCard: {
    width: '44%',
    minHeight: 240,
    padding: 12,
  },

  cardImageContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  thumbnailImageContainer: {
    width: 45,
    height: 45,
  },

  expandedImageContainer: {
    width: 75,
    height: 75,
  },

  cardImage: {
    resizeMode: 'contain',
  },

  thumbnailImage: {
    width: 30,
    height: 30,
  },

  expandedImage: {
    width: 55,
    height: 55,
  },

  cardName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  thumbnailName: {
    fontSize: 12,
    marginTop: 8,
  },

  expandedName: {
    fontSize: 15,
    marginTop: 10,
  },

  cardOccupation: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },

  thumbnailOccupation: {
    fontSize: 8,
    marginTop: 4,
  },

  expandedOccupation: {
    fontSize: 10,
    marginTop: 5,
  },

  cardDescription: {
    color: 'white',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 12,
  },

});
