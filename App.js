import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform,
  TouchableHighlight,
} from 'react-native';
import Cita from './components/Cita';
import Form from './components/Form';

export default function App() {
  const [mostrarForm, setMostrarForm] = useState(true);
  const [citas, setCitas] = useState([]);

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  return (
    // <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnMostrarFormulario}
        >
          <Text style={styles.textoMostrarFormulario}>
            {mostrarForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'}
          </Text>
        </TouchableHighlight>
      </View>

      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Form
              citas={citas}
              setCitas={setCitas}
              setMostrarForm={setMostrarForm}
            />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>
              {citas.length > 0
                ? 'Administr√° tus citas'
                : 'No hay citas, agrega una.'}
            </Text>
            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({ item }) => (
                <Cita item={item} eliminarPaciente={eliminarPaciente} />
              )}
              keyExtractor={(cita) => cita.id}
            />
          </>
        )}
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarFormulario: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarFormulario: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
