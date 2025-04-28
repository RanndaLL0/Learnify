import { FlatList } from "react-native";
import styled from "styled-components/native";

export const CardContainer = styled.View`
    width: 110;
    height: 125;
    background-color: ${props => props.theme.cardBackground};;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

export const CardText = styled.Text`
    color: white;
    font-family: Inter_400Regular;
    font-size: 16;
    margin-top:10;
`