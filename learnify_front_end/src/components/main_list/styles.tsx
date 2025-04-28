import styled from "styled-components/native";


export const Title = styled.Text`
    font-size: 32;
    font-family: Inter_400Regular;
    font-weight: 300;
    color: white;
`

export const ShowAll = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16;
    font-weight: 400;
    color: white;
    text-decoration: underline
`

export const ListContainer = styled.View`
    width: 100%;
    margin-top: 40;
`

export const TextContainer = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const Book = styled.Pressable`
    width: 140;
    height: 200;
    border-radius: 20px;
    margin-top: 25
`