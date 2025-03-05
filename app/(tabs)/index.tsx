import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subtitle}> Sexta feira. 04 de Maio de 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDFCFE',
    marginTop: 48,

  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B6B6B',
  }
});
