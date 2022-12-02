import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';
const App = () => {
  //definir el state de citas
  const [citas /*setCitas*/] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Juan', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Alberto', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Ramon', sintomas: 'No canta'},
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de CItas</Text>
      <FlatList
        data={citas}
        renderItem={({item}) => <Cita item={item} />}
        keyExtractor={cita => cita.id}
      />
      {/*citas.map(cita => (
        <View>
          <Text>{cita.paciente}</Text>
        </View>
      ))*/}
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    minHeight: '100%',
    flex: 1,
  },
  titulo: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
