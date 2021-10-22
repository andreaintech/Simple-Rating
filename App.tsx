import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true';
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                // key={key}
                key={item}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
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
});

export default App;