import { useEffect, useReducer} from "react";
import { Container, Title, LoginContainer, InputArea, LoginButton, Text, LoginText, SignUpContainer, SignUpText } from './styles'
import { TextInput } from "react-native-paper";
import { Pressable, useColorScheme } from "react-native";

type State = {
    userName: string,
    password: string
}

type Action = | { type: "setUsername", text: string } | { type: "setPassword" , text: string}

const initializeState: State = {
    userName: "",
    password: ""
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "setUsername":
            return { userName: action.text, password: state.password }
        case "setPassword":
            return { userName: state.userName, password: action.text }
        default:
            return state;
    }
}

export default function Login({navigation}: any) {

    const deviceTheme = useColorScheme();
    const [state,dispatch] = useReducer(reducer,initializeState);
    const paperTheme = deviceTheme === "dark" ?
        { backgroundColor: "#1E1E1E", color: "white" } :
        { backgroundColor: "white", color: "black" }


    useEffect(() => {
        console.log("Estado atual:", state);
    }, [state]);

    return (
        <Container>

            <LoginContainer>
                <Title>Welcome!</Title>
                <InputArea>

                    <TextInput 
                        value={state.userName} 
                        onChangeText={(text) => dispatch({type: "setUsername",text: text})}
                        label={"E-mail"} textColor={paperTheme.color}
                        theme={{ colors: { primary: paperTheme.color} }}
                        style={{ backgroundColor: paperTheme.backgroundColor, color: paperTheme.color }} />

                    <TextInput
                        secureTextEntry={true} 
                        value={state.password} 
                        onChangeText={(text) => dispatch({type: "setPassword",text: text})}
                        label={"Password"} textColor={paperTheme.color}
                        theme={{ colors: { primary: paperTheme.color} }}
                        style={{ backgroundColor: paperTheme.backgroundColor, color: paperTheme.color }} />

                </InputArea>
                <LoginButton
                    onPress={() => navigation.push('Home')}>
                    <LoginText> Log In </LoginText>
                </LoginButton>
                <Pressable>
                    <Text style={{ textAlign: "center", color: paperTheme.color }}>Forgot Password?</Text>
                </Pressable>
            </LoginContainer>
            <SignUpContainer>
                <SignUpText>
                    SignUp
                </SignUpText>
            </SignUpContainer>
        </Container>
    )
}