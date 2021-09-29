import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './components/Home';

function App() {
  return (
    <View style={styles.mainContainer}>
      <Home/>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "#232F3E",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
});

export default App;



