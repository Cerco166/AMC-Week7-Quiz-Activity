import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';

const App = () => {
  // State to track the toggle
  const [isEnabled, setIsEnabled] = useState(false);

  // Function to handle toggle change
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: isEnabled ? 'lightpink' : 'gray' }]}>
       <Image
        source={{
          uri: isEnabled
            ? 'https://png.pngtree.com/png-clipart/20221019/original/pngtree-vector-bulb-idea-clipart-design-in-yellow-and-gray-color-png-image_8705066.png'  // URL for "on" state image
            : 'https://th.bing.com/th/id/R.3298787e0be9f950a588daceb4021972?rik=yFTJy3Vfpd9KpA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2flight-bulb-clipart-transparent%2flight-bulb-clipart-transparent-12.png&ehk=aN5pjnshujuJU9guR0yqF%2bnkwath3kJ2qO9dqff7IMc%3d&risl=&pid=ImgRaw&r=0' // URL for "off" state image
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{isEnabled ? 'ON' : 'OFF'}</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.text}>AMC</Text>
      <Text style={styles.text2}>Lightbulb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20
  }
});

export default App;