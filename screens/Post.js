import React, {useState,useEffect} from 'react'; 
import {View,Text,StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/listItem';


export default ({navigation}) => {

    const userId = navigation.getParam('userId')

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const fetcPosts = async () => 
    {
        const response= await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    }

    useEffect(()=> {
        fetcPosts();
    },[] );

    return (
      <View style={styles.container}>
        {loading ? <Text>Loading</Text>:
            <FlatList 
                style={styles.list}
                data={posts.filter(x=>x.userId===userId)} 
                keyExtractor={x=> String(x.id) }
                renderItem ={({item})=> 
                    <ListItem title={item.title}
                    onPress={()=>{ navigation.navigate('Detail', {postId: item.id}) }}
                    /> 
                }
            />
        }
      </View>
    );
  }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });