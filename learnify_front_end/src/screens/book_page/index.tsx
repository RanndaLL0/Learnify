import { Container,ScrollableView,BookCover,ImageArea,
        InfoContainer, BookTitle,AuthorTitle,Description
        ,DescriptionContainer,PurchaseArea,PriceTag,OldPrice } from "./styles"
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
                    <BookTitle>
                        Near to the Wild Heart
                    </BookTitle>
                    <AuthorTitle>
                        Clarice Lispector
                    </AuthorTitle>
                    <DescriptionContainer>
                        <Description>
                            Near to the Wild Heart, published in Rio de Janeiro in 1943, 
                            introduced Brazil to what one writer called "Hurricane Clarice" 
                            a twenty-three-year-old girl who wrote her first book in a tiny rented 
                            room and then baptized it with a title taken from Joyce: "He was alone, 
                            unheeded, near to the wild heart of life."
                            The book was an unprecedented sensation -- the discovery of a genius. 
                            Narrative epiphanies and interior monologue frame the life of Joana, 
                            from her middle-class childhood through her unhappy marriage and its dissolution 
                            to transcendence, when she proclaims: "I shall arise as strong and comely as a young colt."
                        </Description>
                    </DescriptionContainer>
                </InfoContainer>
            </ScrollableView>
            <PurchaseArea>
                <PriceTag>$16.99 <OldPrice>$20.00</OldPrice></PriceTag>
            </PurchaseArea>
        </Container>
    )
}