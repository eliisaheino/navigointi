import React from "react";
import { View, Text, FlatList, StatusBar, StyleSheet } from "react-native";

export default function Calculator ({route, navigation}){
    const {data} = route.params;
    return(
        <View style={style.container}>
            <Text style ={style.text}>
                History:
            </Text>
            <FlatList 
        data={data}
        renderItem={({item}) => <Text style ={style.item}>{item.key}</Text>}
        keyExtractor ={(item, index) => index.toString() } />
      <StatusBar style="auto" />
    </View>
  );
   
};

const style= StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    input : {
      width:200  , 
      borderColor: 'black', 
      borderWidth: 1
    },
    text:{
      fontSize: 20,
      
    }
    
  });

