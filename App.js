// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GirisEkrani from './screens/GirisEkrani';
import SelamSayfasi from './screens/SelamSayfasi';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GirisEkrani">
        <Stack.Screen name="GirisEkrani" component={GirisEkrani} />
        <Stack.Screen name="SelamSayfasi" component={SelamSayfasi} />
        {/* Diğer sayfaları buraya ekleyebilirsiniz */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
