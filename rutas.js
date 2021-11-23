import * as React  from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const rutasRoute = () => <Text>Rutas</Text>;

export default function Rutas() {

  return (
    <View>
      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={{alignSelf: 'center', fontFamily: 'Segoe UI', fontSize: 40, color: '#9B00FF'}}>Rutas</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Campo Valdés - Poblado</Text>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Laureles - Centro</Text>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Castilla - Envigado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cuadro: {
      alignSelf: 'center',
      flexDirection:'row', 
      flexWrap:'wrap'
  },
  textos: {
      fontFamily: 'Segoe UI',
      fontSize : 20,
  },
})
