import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Login from './src/screens/login';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme/themes';
import { useEffect } from 'react';

export default function App() {
  const deviceTheme = useColorScheme();
  const actualTheme = themes[deviceTheme] || themes.dark;

  return (
    <ThemeProvider theme={ actualTheme }>
      <Login/>
    </ThemeProvider>
  );
}