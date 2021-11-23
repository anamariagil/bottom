import * as React  from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import registroRoute from './registro';
import rutasRoute from './rutas';
import vehiculosRoute from './vehiculos';

export default function Inicio() {
  const [index, setIndex] = React.useState(0);
  const [routes ] = React.useState([
    {key: 'registro', title:'Registro', icon:'login'},
    {key: 'rutas', title: 'Rutas', icon: 'routes'},
    {key: 'vehiculos', title: 'Vehículos', icon: 'car'}
  ])

  const renderScene = BottomNavigation.SceneMap({
    registro: registroRoute,
    rutas: rutasRoute,
    vehiculos: vehiculosRoute
  });

  
  
  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({

})
