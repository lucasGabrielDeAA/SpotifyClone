import React from 'react';

import { View, StatusBar } from 'react-native';

import { colors } from 'styles';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
  </View>
);

Main.navigationOptions = {
  title: 'Sua Biblioteca',
};

export default Main;
