import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles'


export default function NotFoundScreen() {
  const { styles, theme } = useStyles( stylesheet )

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oops!',
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.typography
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.typography
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: theme.colors.typography
  },
  linkText: {
    fontSize: 14,
    color: theme.colors.typography
  },
}))
