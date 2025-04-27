import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useFonts,Inter_400Regular } from "@expo-google-fonts/inter";


export const Container = styled(SafeAreaView)`
    background-color: ${props => props.theme.background};
    flex:1;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.Text`
    color: ${props => props.theme.loginText};
    font-family: Inter_400Regular;
`

export const Title = styled.Text`
    color: ${props => props.theme.loginText};
    fontSize: 48;
    margin-bottom: 30;
    font-family: Inter_400Regular;
`

export const LoginContainer = styled.View`
    flex: 0.5;
    background-color: ${props => props.theme.background};
    margin-top: 100;
    width: 80%;
    gap:20;
`

export const InputArea = styled.View`
    height: 130;
    background-color: ${props => props.theme.background};
    gap: 20;
    justify-content: center;
`

export const LoginButton = styled(Pressable)`
    background-color: #273230;
    padding: 10px;
    align-items: center;
    width: 100%;
    margin-top: 30;
    border-radius: 15px;
`

export const LoginText = styled.Text`
    font-size: 22;
    color: white;
    font-family: Inter_400Regular;
`

export const SignUpContainer = styled(Pressable)`
    width: 80%;
    align-items: center;
`

export const SignUpText = styled.Text`
    font-size: 22;
    color: ${props => props.theme.loginText};
    font-family: Inter_400Regular;
    padding-top: 40;
    padding-bottom: 40;
`