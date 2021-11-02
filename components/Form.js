import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import shortid from 'shortid';

const Form = ({ citas, setCitas, setMostrarForm }) => {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');

  const crearNuevaCita = () => {
    //VALIDACION
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      sintomas.trim() === ''
    ) {
      mostrarAlerta();
      return;
    }
    //CREAR CITA
    const cita = { paciente, propietario, telefono, fecha, hora, sintomas };
    cita.id = shortid.generate();
    const citasNuevas = [...citas, cita];
    setCitas(citasNuevas);

    //OCULTAR FORMULARIO
    setMostrarForm(false);

    //RESETEAR FORMULARIO
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Todos los campos son obligatorios', [
      {
        text: 'OK',
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => setPaciente(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => setPropietario(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => setTelefono(texto)}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChange={(texto) => setSintomas(texto)}
            keyboardType='numeric'
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnSubmit}
          >
            <Text style={styles.textoSubmit}>Crear Cita &times;</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
  },
});

export default Form;
