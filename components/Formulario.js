/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, TouchableHighlight,Alert, ScrollView} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import shortid from 'shortid';

const Formulario = ({citas, setCitas, guardarMostrarForm}) => {

    const [paciente,guardarPaciente]  = useState('');
    const [propietario,guardarPropietario]  = useState('');
    const [telefono,guardarTelefono]  = useState('');
    const [fecha,guardarFecha]  = useState('');
    const [hora,guardarHora]  = useState('');
    const [sintomas,guardarSintomas]  = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatepicker = () => {
        setDatePickerVisibility(false);
    };


    const confirmarFecha = date => {
        const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatepicker();
    };

    //muestra u oculta el time picker


    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimepicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarHora = horas => {
        const opciones = {hour: 'numeric', minute: '2-digit'};
        guardarHora(horas.toLocaleDateString('en-US', opciones));
        hideTimepicker();
    };
    //crear nueva cita
    const crearNuevaCita = () =>{
        //validar
        if (paciente.trim() === '' || propietario.trim() === '' || telefono.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '')
        {
        //falla la validacion
           mostrarAlerta();
            return;
        }

        //crear una nueva cita
        const cita  = { paciente, propietario, telefono, fecha, hora, sintomas};
        cita.id = shortid.generate();

        console.log(cita);

        //agregar el state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        // ocultar form
        guardarMostrarForm(false);

        //resetear el form
    };

    //muestra alerta si falla la validacion
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', //titulo
            'Todos los campos  son obligatorios', //mensaje
            [{
                text: 'OK', // Arreglo de botones
            }]
        );
    };

    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={texto=> guardarPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Dueño:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(texto)=> guardarPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefono Contacto:</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={(texto)=> guardarTelefono(texto)}
                    />
                </View>
                <View>
                <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
                    <DateTimePicker
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatepicker}
                        locale="es_ES"
                    />
                    <Text style={styles.label}>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora:</Text>
                    <Button title="Seleccionar Hora" onPress={showTimePicker}/>
                    <DateTimePicker
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimepicker}
                        locale="es_ES"
                    />
                    <Text style={styles.label}>{hora}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas:</Text>
                    <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={(texto)=> guardarSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPress={()=>crearNuevaCita('submit')} style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}> Registrar </Text>
                     </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: 'black',
    },
    input:{
        marginTop: 10,
        height: 50,
        borderColor:'#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'black',
    },

    formulario:{
        backgroundColor: '#FFF',
        paddingHorizontal:20,
        paddingVertical: 10,
        marginHorizontal:'2.5%',
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#7d024d',
        marginVertical: 10,
    },
    textoSubmit:{
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default Formulario;
