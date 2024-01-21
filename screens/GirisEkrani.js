// GirisEkrani.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const GirisEkrani = ({ navigation }) => {
  const [etkinlikAdi, setEtkinlikAdi] = useState('');

  const handleEtkinlikOlustur = async () => {
    try {
      // Sunucuya etkinlik adını gönder
      const response = await axios.post('http://localhost:3000/buyukHarf', { etkinlikAdi });

      // Sunucudan gelen cevabı al
      const buyukHarfliEtkinlikAdi = response.data.message;

      // SelamSayfasi'na yönlendir ve sunucudan gelen mesajı iletecek şekilde güncelle
      navigation.navigate('SelamSayfasi', { mesaj: buyukHarfliEtkinlikAdi });
    } catch (error) {
      console.error('Sunucu hatası:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Etkinlik Adı"
          value={etkinlikAdi}
          onChangeText={(text) => setEtkinlikAdi(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleEtkinlikOlustur}>
          <Text style={styles.buttonText}>Etkinlik Oluştur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default GirisEkrani;
