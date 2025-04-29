import { Container,ScrollableView,BookCover,ImageArea,InfoContainer } from "./styles"
import { ImageBackground } from "react-native"

export default function BookPage() {
    return (
        <Container>
            <ScrollableView>
                <ImageArea>
                    <BookCover>
                        <ImageBackground
                            source={{uri: "http://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}}
                            style={{flex:1}}
                            imageStyle={{borderRadius: 10}}
                            resizeMode="contain"
                        />
                    </BookCover>
                </ImageArea>
                <InfoContainer>
                        
                </InfoContainer>
            </ScrollableView>
        </Container>
    )
}