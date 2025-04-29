import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ScrollableView = styled.View`
  width: 100%;
  padding: 0 5%;
  background-color: #121212;
  flex: 1;
`;

export const BookCover = styled.Pressable`
  width: 245px;
  height: 345px;
  border-radius: 10px;
`;

export const ImageArea = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
`;

export const BookTitle = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
`;

export const AuthorTitle = styled.Text`
  font-size: 18px;
  color: gray;
  font-weight: 500;
`;

export const DescriptionContainer = styled.ScrollView`
  width: 100%;
  height: 140px;
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: gray;
`;

export const PurchaseArea = styled.View`
  background-color: #121212;
  flex: 0.20;
  width: 100%;
  padding: 20px 20px;
`;

export const PriceTag = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 26;
`;

export const OldPrice = styled.Text `
  font-size: 18;
  color: gray;
  text-decoration: line-through;
`