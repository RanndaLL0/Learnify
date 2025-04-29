import styled from "styled-components/native";

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

export const BookCover = styled.Pressable`
    width: 300;
    height: 400;
    border-radius: 10px;
`

export const ImageArea = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

export const InfoContainer = styled.View`
    width: 90%;
    background-color: white;
    height: 40;
    margin: 0 auto;
    margin-top: 20;
`