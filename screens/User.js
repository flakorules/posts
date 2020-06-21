import React, {useEffect,useState} from 'react'; 
import {View,Text,StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/listItem'

const users=[
    {id:"1",name:'Tereso'},
    {id:"2",name:'Condor'},
    {id:"3",name:'Viejo Pelao'},
];

export default ({navigation}) => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => 
    {
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    }

    useEffect(()=> {
        fetchUsers();
    },[] );

    return (   

        <View style={styles.container}>
        {loading ? <Text>Loading</Text>:
            <FlatList 
                style={styles.list}
                data={users} 
                keyExtractor={x=> String(x.id) }
                renderItem ={({item})=> 
                    <ListItem title={item.name}
                    onPress={()=>{ navigation.navigate('Posts', {userId: item.id}) }}
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
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    list:{
        alignSelf:'stretch'
    }
  });