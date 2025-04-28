import styled from "styled-components/native"
import { useFonts,Inter_400Regular } from "@expo-google-fonts/inter";

export const Card = styled.View`
    background-color: ${props => props.theme.cardBackground};
    height: 135;
    border-radius: 20px;
    padding: 10px 30px;
    margin-top: 40;
    justify-content:center;
`

export const CardTitle = styled.Text`
    color: white;
    font-family: Inter_400Regular;
    font-size: 32;
`

export const CardSubTitle = styled.Text`
    font-family: Inter_400Regular;
    color: #4B4B4C;
    font-weight: 600;
    font-size: 22;
`
