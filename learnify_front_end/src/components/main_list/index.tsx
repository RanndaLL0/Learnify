import { ListContainer,Title,ShowAll,TextContainer,Book } from "./styles"
import { Pressable,FlatList,View,ImageBackground } from "react-native"

type Url = {
    uri: string
}

type Title = {
    title: string,
    navigation: any
}

export default function MainList({title,navigation}: Title) {
    
    const data: Url[] = [
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2015/09/A-Breath-of-Life.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2010/09/closing_time.large_.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2010/09/closing_time.large_.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2010/09/lost_decades.large_.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2015/06/Calvino07.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/2015/06/Calvino07.jpg"
        },
        {
            uri: "http://bookcoverarchive.com/wp-content/uploads/amazon/wall_street.jpg"
        }
    ]

    const Item = ({cover}: {cover: string}) => (
        <Book onPress={() => navigation.push('Book')}>
            <ImageBackground source={{uri: cover}} style={{flex:1}} imageStyle={{borderRadius: 10}} resizeMode="cover"/>
        </Book>
    );

    return (
        <ListContainer>
            <TextContainer>
                <Title>{title}</Title>
                <Pressable>
                    <ShowAll>ShowAll</ShowAll>
                </Pressable>
            </TextContainer>
            <FlatList
                data={data}
                renderItem={({item}) => <Item cover={item.uri}></Item>}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
            />
        </ListContainer>
    )
}