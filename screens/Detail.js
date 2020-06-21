import React, {useState,useEffect} from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


export default ({navigation}) => {

    const postId = navigation.getParam('postId')

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const fetcDetail = async () => 
    {
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        setDetail(data);
        setLoading(false);
    }

    useEffect(()=> {
        fetcDetail();
    },[] );

    return (
        <View style={styles.container}>
        { loading ? <Text>Loading...</Text> :
            <>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{detail.title}</Text>
            </View>
            <View style={styles.detalle}>
                <Text>{detail.body}</Text>
            </View>
            </>
        }
        </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      padding: 24,
      backgroundColor:'#FFD700'
    },
    titulo:{
        padding:20,
        flex: 1
    },
    tituloTexto:{
        fontSize:15,
        fontWeight:'bold'
    },
    detalle:{
        padding:20,
        flex: 10
    }
  });