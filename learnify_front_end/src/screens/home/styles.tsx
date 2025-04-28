import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { useFonts,Inter_400Regular } from "@expo-google-fonts/inter";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #121212;
    align-items: center
`;

export const HomeContainer = styled.ScrollView`
    width: 90%;
    margin-top: 50;
`

export const MainTitle = styled.Text`
    font-family: Inter_400Regular;
    font-size: 32;
    font-weight: 600;
    color: white;
`
