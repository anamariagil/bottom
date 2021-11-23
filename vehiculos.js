import * as React  from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const vehiculosRoute = () => <Text>Vehiculos</Text>;

export default function Inicio() {

  return (
    <View>
      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>
      <View>
        <Image source={require('./images/V1.jpg')} style={{width:200,height:100,borderRadius:10,flex: 1, alignSelf: "center"}} />
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Placa: </Text>
        </View>
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Propietario: </Text>
        </View>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View>
        <Image source={require('./images/V2.jpg')} style={{width:200,height:100,borderRadius:10,flex: 1, alignSelf: "center"}} />
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Placa: </Text>
        </View>
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Propietario: </Text>
        </View>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View>
        <Image source={require('./images/V3.jpg')} style={{width:200,height:100,borderRadius:10,flex: 1, alignSelf: "center"}} />
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Placa: </Text>
        </View>
        <View style={styles.cuadro}>
            <Text style={styles.textos}>Propietario: </Text>
        </View>
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
