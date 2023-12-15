import { StyleSheet, Text, View } from 'react-native'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import EditScreenInfo from '../../components/EditScreenInfo';

export default function TabTwoScreen() {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.typography
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: theme.colors.typography
  },
}))
