import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  const [defaultRating, setDefaultRating] = useState(-1);
  const [maxRating, setMaxRating] = useState([0, 1, 2, 3, 4]);

  const showAlert = (defaultRating: number) => {
    Alert.alert(
      "Default rating",
      `Default rating: ${defaultRating + 1}`,
      [
        {
          text: "Ok",
          onPress: () => { },
          style: "default",
        },
      ],
    );
  }

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={index}
                onPress={() => setDefaultRating(item)}
              >
                <Text>
                  <Icon name={item <= defaultRating ? 'star' : 'staro'} size={35} color="#7F00FF" />
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Please rate us</Text>
      <CustomRatingBar />
      <Text style={styles.textStyle}>
        {(defaultRating + 1) + ' / ' + maxRating.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => showAlert(defaultRating)}
      >
        <Text>Get selected value</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    backgroundColor: '#00bfff',
  }
});

export default App;