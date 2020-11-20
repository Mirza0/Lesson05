/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
//import Movie from './Movies';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Movie} from './Movies';
import {MovieList} from './Movies';
import {TheList} from './Boats';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Lesson 05 Exercises</Text>

        <MovieList />
        <TheList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
