import { useColorScheme } from 'react-native';
import Login from './src/screens/login';
import Home from './src/screens/home';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme/themes';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import BookPage from './src/screens/book_page';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Stack = createStackNavigator();

export default function App() {
  const deviceTheme = useColorScheme();
  const actualTheme = themes[deviceTheme] || themes.dark;

  return (
    <NavigationContainer>
      <ThemeProvider theme={themes.light}>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
             name="Login" component={Login}
             options={{headerShown: false}}/>
          <Stack.Screen
            name="Home" component={Home} 
            options={{headerShown: false}}/>

            <Stack.Screen
            name="Book" component={BookPage}
            options={{
              title: "",
              headerStyle: {
                height: 105,
                justifyContent: "space-between",
                backgroundColor: "#121212"
              },
              headerBackImage: () => (
                <AntDesign name="arrowleft" size={28} color="white" />
              ),
              headerRight: () => (
                <Feather name="square" size={28} style={{marginRight: 10}} color="white" />
              )
            }} />
            
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}