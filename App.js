import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
    const [tecnologias, setTecnologias] = useState([]);

    const adicionarTecnologia = (novaTecnologia) => {
        if (novaTecnologia) {
          setTecnologias([...tecnologias, { nome: novaTecnologia, estudada: false }]);
        }
      };

      const marcarComoEstudada = (tecnologia) => {
        setTecnologias((prevTecnologias) =>
          prevTecnologias.map((t) =>
            t === tecnologia ? { ...t, estudada: !t.estudada } : t
          )
        );
      };

      const removerTecnologia = (tecnologia) => {
        setTecnologias((prevTecnologias) =>
          prevTecnologias.filter((t) => t !== tecnologia)
        );
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tecnologias Estudadas</Text>
      </View>

      <View style={styles.body}>
        <TextInput
        style={styles.input}
        placeholder="Adicionar tecnologia"
        onChangeText={(text) => adicionarTecnologia(text)}
        />

        <FlatList
        data={tecnologias}
        keyExtractor={(tecnologia, index) => index.toString()}
        renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item}</Text>

              <Button
                title={item.estudada ? "Desmarcar" : "Marcar"}
                color={item.estudada ? "red" : "green"}
                onPress={() => marcarComoEstudada(item)}
              />

                <Button
                title="Remover"
                color="red"
                onPress={() => removerTecnologia(item)}
                />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "blue",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  body: {
    backgroundColor: "white",
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  item: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;