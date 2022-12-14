/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';

const Cita = ({item}) => {
    const dialogoEliminar =  () => {
        console.log('eliminado...');
    };

  return (
    <View>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.texto}>{item.Sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={()=> dialogoEliminar()} style={styles.btnEliminar}>
            <Text style={styles.textoEliminar}> Eliminar  &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    cita:{
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal:  10,
    },
    label:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:18,
        marginTop: 20,
    },
    texto:{
        fontSize:18,
        color: 'black',
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    textoEliminar:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',


    },

});

export default Cita;
