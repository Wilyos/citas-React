/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList,TouchableHighlight, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {

  const [mostrarform, guardarMostrarForm] = useState(false);

  //definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Alberto', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Ramon', sintomas: 'No canta'},
  ]);

  //muestra u oculta el form
  const mostrarFormulario = () =>{
    guardarMostrarForm(!mostrarform);
  };

  //cerrar teclado

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>

        <View>
          <TouchableHighlight onPress={()=>mostrarFormulario()} style={styles.btnMostrarForm}>
              <Text style={styles.textMostrarForm}> Registrar </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contenido}>
          {mostrarform ? (
            <>
              <Text style={styles.titulo}> {mostrarform ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'} </Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus Citas' : 'no  hay citas, agrega una'}</Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => <Cita item={item} />}
                keyExtractor={cita => cita.id}
              />
            </>
          )}

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    minHeight: '100%',
    flex: 1,
  },
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contenido:{
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado:{
    color: 'black',
    backgroundColor: 'white',
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024d',
    marginVertical: 10,
},
textMostrarForm:{
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
},
});
export default App;
