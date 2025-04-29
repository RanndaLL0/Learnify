import { Container, HomeContainer, MainTitle } from "./styles"
import RectangleCard from "../../components/rectangle card/"
import CategoryList from "../../components/category_list"
import MainList from "../../components/main_list"

export default function Home({navigation}: any) {

    return (
        <Container>
            <HomeContainer>
                <MainTitle>Home</MainTitle>
                <RectangleCard />
                <CategoryList />
                <MainList navigation={navigation} title={"Best Sellers"} />
                <MainList navigation={navigation} title={"On Promo"} />
                <MainList navigation={navigation} title={"Specials for you"}/>
            </HomeContainer>
        </Container>
    )
}