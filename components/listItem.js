import React from 'react'; 
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default ({title, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        paddingHorizontal:15
    },
    Text:{
        fontSize:18
    }
});