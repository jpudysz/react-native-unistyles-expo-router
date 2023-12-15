import React from 'react';
import { Text, View, Pressable } from 'react-native'
import { UnistylesRuntime, createStyleSheet, useStyles } from 'react-native-unistyles'
import { ExternalLink } from './ExternalLink'


export default function EditScreenInfo({ path }: { path: string }) {
  const { styles } = useStyles(stylesheet)
  const changeTheme = () => {
    UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}>
          Open up the code for this screen:
        </Text>

        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <Text style={styles.mono}>{path}</Text>
        </View>

        <Text style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
        <Pressable
          onPress={() => changeTheme()}
          style={styles.button}
        >
          <Text style={styles.getStartedText}>
              Change theme
          </Text>
          </Pressable>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: theme.colors.typography
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
    color: theme.colors.typography
  },
  mono: {
    color: theme.colors.typography
  },
  button: {
    backgroundColor: theme.colors.accent,
    color: theme.colors.background,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  }
}))
