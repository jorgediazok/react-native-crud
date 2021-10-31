import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './components/Cita';
import Form from './components/Form';

export default function App() {
  const [citas, setCitas] = useState([
    {
      id: '1',
      paciente: 'Hook',
      propietario: 'Juan',
      sintomas: 'No Come',
    },
    {
      id: '2',
      paciente: 'Redux',
      propietario: 'Manuel',
      sintomas: 'No Duerme',
    },
    {
      id: '3',
      paciente: 'Native',
      propietario: 'Masha',
      sintomas: 'No Canta',
    },
  ]);

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <Form />
      <Text style={styles.titulo}>
        {citas.length > 0
          ? 'Administrá tus citas'
          : 'No hay citas, agrega una.'}
      </Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => (
          <Cita item={item} eliminarPaciente={eliminarPaciente} />
        )}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
});
