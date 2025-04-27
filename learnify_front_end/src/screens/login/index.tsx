import { useEffect, useState } from "react";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { Container, Title, LoginContainer, InputArea, LoginButton, Text, LoginText, SignUpContainer, SignUpText } from './styles'
import { TextInput } from "react-native-paper";
import { Pressable, useColorScheme } from "react-native";

export default function Login() {

    const deviceTheme = useColorScheme();
    const paperTheme = deviceTheme === "dark" ?
        { backGroundColor: "#1E1E1E", color: "white" } :
        { backGroundColor: "white", color: "black" }

    return (
        <Container>

            <LoginContainer>
                <Title>Welcome!</Title>
                <InputArea>

                    <TextInput label={"E-mail"} textColor={paperTheme.color}
                        theme={{ colors: { primary: paperTheme.color} }}
                        style={{ backgroundColor: paperTheme.backGroundColor, color: paperTheme.color }} />

                    <TextInput label={"Password"} textColor={paperTheme.color}
                        theme={{ colors: { primary: paperTheme.color} }}
                        style={{ backgroundColor: paperTheme.backGroundColor, color: paperTheme.color }} />

                </InputArea>
                <LoginButton
                    onPress={() => alert('Pressed!')}>
                    <LoginText> Log In </LoginText>
                </LoginButton>
                <Pressable>
                    <Text style={{ textAlign: "center", color: (props: { theme: { loginText: string; }; }) => props.theme.loginText }}>Forgot Password?</Text>
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