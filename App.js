import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Cita from './components/Cita';

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

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <FlatList
        data={citas}
        renderItem={({ item }) => <Cita item={item} />}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
});
