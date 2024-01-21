// GirisEkrani.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const GirisEkrani = ({ navigation }) => {
  const [etkinlikAdi, setEtkinlikAdi] = useState('');
  const [profilAdi, setProfilAdi] = useState('');
  
  const handleEtkinlikOlustur = async () => {
      // Sunucuya etkinlik adını ve profil adını gönder
    const response = await axios.post('https://first-app-buyukharf-9b4c2c44b4ec.herokuapp.com/buyukHarfeCevir', { etkinlikAdi });
    const buyukHarfliEtkinlikAdi = response.data.message;

    // SelamSayfasi'na yönlendir ve sunucudan gelen mesajı iletecek şekilde güncelle
    navigation.navigate('SelamSayfasi', { mesaj: `${profilAdi} ${buyukHarfliEtkinlikAdi} etkinliğini başlattı` });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Profil Adınızı Girin"
        value={profilAdi}
        onChangeText={(text) => setProfilAdi(text)}
      />
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
