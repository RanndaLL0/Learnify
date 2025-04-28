import { View, Image, FlatList} from "react-native";
import { CardContainer,CardText } from "./styles";

type ItemProps = {
    title: string,
    icon: string
};

const Item = ({title,icon}: ItemProps) => (
    <CardContainer>
        <Image style={{width:40,height:40}} source={icons[icon]}></Image>
        <CardText>{title}</CardText>
    </CardContainer>   
);

const icons: { [key: string]: any } = {
    "popular": require("../../assets/images/popular_svg.png"),
    "romance": require("../../assets/images/romance_svg.png"),
    "science": require("../../assets/images/science_svg.png"),
    "philosophy": require("../../assets/images/philosophy_svg.png"),
    "horror": require("../../assets/images/horror_svg.png"),
    "fanfic": require("../../assets/images/fanfic_svg.png"),
    "education": require("../../assets/images/education_svg.png"),
    "manga": require("../../assets/images/manga_svg.png"),
  };
  
const data = [
    {
        id: "1",
        icon: "popular",
        cardName: "Popular",
    },
    {   
        id: "2",
        icon: "romance",
        cardName: "Romance",
    },
    {   
        id: "3",
        icon: "science",
        cardName: "Science",
    },
    {
        id: "4",
        icon: "philosophy",
        cardName: "Philosophy",
    },
    {
        id: "5",
        icon: "horror",
        cardName: "Horror",
    },
    {
        id: "6",
        icon: "fanfic",
        cardName: "Fanfic",
    },
    {
        id: "7",
        icon: "education",
        cardName: "Education",
    },
    {
        id: "8",
        icon: "manga",
        cardName: "Manga",
    }
]

export default function CategoryList() {
    return (
        <FlatList
            style={{marginTop: 40}}
            data={data}
            horizontal={true}
            renderItem={({item}) => <Item title={item.cardName} icon={item.icon}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
        />
    )
}