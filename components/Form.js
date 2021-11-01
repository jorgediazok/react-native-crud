import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const Form = () => {
  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => console.log(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Teléfono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChange={(texto) => console.log(texto)}
            keyboardType='numeric'
          />
        </View>
        <View>
          <Text style={styles.label}>Síntomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChange={(texto) => console.log(texto)}
            keyboardType='numeric'
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
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
});

export default Form;
