import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;
    
export const ScrollableView = styled.ScrollView`
    width: 100%;
    padding: 0 5%;
    background-color: #121212;
    flex: 1;
`