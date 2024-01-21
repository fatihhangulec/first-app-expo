// SelamSayfasi.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SelamSayfasi = ({ route }) => {
  const { mesaj } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mesaj || 'Sunucudan gelen mesaj yok'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SelamSayfasi;
