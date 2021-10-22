import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [defaultRating, setDefaultRating] = useState(-1);
  const [maxRating, setMaxRating] = useState([0, 1, 2, 3, 4]);
  const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

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
                <Image
                  style={styles.starStyle}
                  source={
                    item <= defaultRating ? { uri: starImgFilled } : { uri: starImgCorner }
                  }
                />
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
  starStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
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