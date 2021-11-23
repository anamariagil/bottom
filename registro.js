import * as React  from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const registroRoute = () => <Text>Registro</Text>;

export default function Registro() {
  const [usuario, setUsusario] = React.useState('');
  const [contrasena, setContrasena] = React.useState('');
  const [respuesta, setRespuesta] = React.useState('');

  const onBoton = () => {
    if (usuario=='' || contrasena==''){
      alert('Debe ingresar todos los datos')
    }else{
      setRespuesta("La contraseña del usuario: '" +usuario+ "' es '" +contrasena+ "'" )
    }
  };

  return (
    <View>
      <View>
        <Text>{"\n"}</Text>
       <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text style={{alignSelf: 'center', fontFamily: 'Segoe UI', fontSize: 40, color: '#9B00FF'}}>Inicio de sesión</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Usuario</Text>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TextInput type="text" maxLength="10" style={styles.espacios} onChangeText={usuario =>setUsusario(usuario)} value={usuario}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <Text style={styles.textos}>Contraseña</Text>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TextInput type="number" maxLength="10" style={styles.espacios} onChangeText={contrasena =>setContrasena(contrasena)} value={contrasena}></TextInput>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View style={styles.cuadro}>
        <TouchableOpacity style={styles.boton} onPress={()=>onBoton()}>
          <Text style={styles.textos}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <View>
        <TextInput style={{fontFamily: 'Segoe UI', fontSize: 15}} placeholder={setRespuesta} onChangeText={respuesta =>setRespuesta(respuesta)} value={respuesta}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  espacios: {
      textAlign: 'center',
      borderRadius:2,
      borderBottomWidth:2,
      color:'black'
  },
  cuadro: {
      alignSelf: 'center',
      flexDirection:'row', 
      flexWrap:'wrap'
  },
  textos: {
      fontFamily: 'Segoe UI',
      fontSize : 20,
  },
  boton: {
    backgroundColor:'#E1B3FF',
    padding:5,
    borderRadius:5,
    margin:1,
    borderWidth:1,
    borderColor:'black',
  },
})