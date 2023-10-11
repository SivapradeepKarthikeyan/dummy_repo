<<<<<<< HEAD
import React from 'react';
import{View,StyleSheet,Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ScrollCoinsTemplate(props){
 const navigation = useNavigation();

    //COLOR CHECK
    let isHigh=false;
    if(props.price_change_percentage_24h>=0)
    {
        isHigh=true
    }

    //GO COIN DETAIL
    function goCoinDetail(){
        const data={CoinName:props.id}
        navigation.navigate('CoinDetail',{data})
    }

    return(
        <View>
            <View style={styles.parent}>
                <Image source={{uri:props.image}} style={styles.image}/>
                    <View style={styles.details}>
                        <Text style={styles.detail}>{props.name}</Text>
                        <Text style={styles.detail}>{props.current_price}</Text>
                    </View>
                <Text style={isHigh ? styles.isHighGreen : styles.isHighRed}>{props.price_change_percentage_24h}</Text>
                <Text style={styles.view} onPress={()=>{goCoinDetail()}}>VIEW</Text>
=======
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScrollCoinsTemplate(props) {

    //ViewClicked
    const navigation = useNavigation();
    const viewClicked = () => {
        //data to be sent
        //sending as JSON
        const data = {
            coinId: props.id,
            coinName: props.name,
            coinImage: props.image,
            full_object: props.full_object
        };
        navigation.navigate('CoinDetail', { data });
    }

    //Color Check
    let isHigh = true;
    if (props.price_change_percentage_24h < 0) {
        isHigh = false;
    }

    return (
        <View style={{ margin: 1, padding: 5 }}>
            <View style={styles.container}>
                <Image source={{ uri: props.image }} style={styles.image} />
                <View>
                    <Text style={styles.details_Id}>{props.name}</Text>
                    <Text style={styles.details_Price}>{props.current_price}</Text>
                </View>
                <Text style={isHigh ? styles.high : styles.low}>{props.price_change_percentage_24h}%</Text>
                <Text style={{ color: 'skyblue', fontStyle: "italic", fontWeight: '400' }} onPress={viewClicked}>View</Text>
>>>>>>> aa7a08f (commit from vs code)
            </View>
        </View>
    )
}

<<<<<<< HEAD
const styles=StyleSheet.create({
parent:{
    display:'flex',
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:'black',
    padding:2,
    margin:5,
    width:'100%'
},
image:{
    height:50,
    width:50,
  //  borderRadius:5
},
details:{
    display:'flex',
    marginLeft:20
},
detail:{
    fontSize:12,
    fontWeight:'bold',
    color:"white"
},
isHighGreen:{
    fontSize:12,
    fontWeight:'bold',
    color:"green"
},
isHighRed:{
    fontSize:12,
    fontWeight:'bold',
    color:"red"
},
view:{
    color:"blue",
    fontSize:15
}
})
=======
const styles = StyleSheet.create(
    {
        container: {
            height: 100,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#0C090A', //night black
            borderRadius: 25,

        },

        image: {
            height: 60,
            width: 60,
            borderRadius: 5
        },

        details_Id: {
            color: 'white',
            fontSize: 14,
            fontStyle: "italic"
        },

        details_Price: {
            color: 'white',
            fontSize: 13,
            fontStyle: "italic"
        },

        high: {
            color: 'green',
            fontSize: 13
        },
        low: {
            color: 'red',
            fontSize: 13
        }
    }
)
>>>>>>> aa7a08f (commit from vs code)
