import React from 'react';
<<<<<<< HEAD
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useState,useEffect} from 'react';
import axios from 'axios';
import NewsTemplate from './NewsTemplate'

export default function News(props){
const route=useRoute();
const CoinName=route.params.CoinName;
const[newsArray,setNewsArray]=useState([]);

useEffect(()=>{
    
    const url="https://newsapi.org/v2/everything?q="+`${CoinName}`+"&apiKey=892a6535a50e4321a237b8389d75cc78";
    axios.get(url).then(response=>{
        setNewsArray(response.data.articles);
    })

},[])

 return(
     <View>
          <ScrollView style={{backgroundColor:'black'}}>
              {
                  newsArray.map(i=>{
                      return(
                          <NewsTemplate key={i.title}
                                    title={i.title}
                                    urlToImage={i.urlToImage}
                                    description={i.description}
                                    author={i.author}
                                    publishedAt={i.publishedAt}
                                    source={i.source.name}
                                    url={i.url}
                                    /> 
                        )
                  })
              }




              
          </ScrollView>
     </View>
 )
}
=======
import { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import { useRoute } from '@react-navigation/native';
import NewsTemplate from './NewsTemplate';


export default function News() {

    const [newsArray, setNewsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    var id = 0;
    //Route
    const route = useRoute();
    const data = route.params;
    let coinName = data?.coinName;
    console.log(coinName)

    //Refresh
    const [refreshing, setRefreshing] = useState(false);

    //UseEffect
    useEffect(() => {
        setNewsArray([])
        fetchNews()
    }, [coinName])



    //Refresh
    const onRefresh = () => {
        setRefreshing(true);
        coinName = undefined
        setTimeout(() => {
            fetchNews();
            setRefreshing(false);
        }, 2000);
    };


    //Data from API
    async function fetchNews() {
        setIsLoading(true);
        let url;
        url = (coinName == undefined) ?
            `https://newsapi.org/v2/everything?q=world&apiKey=892a6535a50e4321a237b8389d75cc78` :
            `https://newsapi.org/v2/everything?q=${coinName.toLowerCase()}&apiKey=892a6535a50e4321a237b8389d75cc78`;
        console.log(url)
        await Axios.get(url)
            .then((res) => { setNewsArray(res.data.articles); setIsLoading(false); })
            .catch((err) => { console.log(err); setIsLoading(false); })
    }


    return (
        <View style={{ height: '100%', backgroundColor: 'black' }}>

            {
                isLoading ?
                    (<>
                        {/* <ActivityIndicator size="large" color="blue" style={{ marginTop: 500 }} /> */}
                        <Image source={{ uri: `https://miro.medium.com/v2/resize:fit:1400/0*QdX-f4eHiimvQZoZ.gif` }}
                            style={{ height: 100, width: 100, marginTop: 400, alignSelf: 'center' }} />
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Loading</Text>

                    </>
                    )
                    :
                    (
                        <>

                            <ScrollView
                                style={{ backgroundColor: "black" }}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                            >
                                {
                                    newsArray.map(i => {
                                        return (
                                            <NewsTemplate
                                                key={++id}
                                                title={i.title}
                                                urlToImage={i.urlToImage}
                                                description={i.description}
                                                author={i.author}
                                                publishedAt={i.publishedAt}
                                                source={i.source.name}
                                                url={i.url}
                                            />

                                        )
                                    })
                                }
                            </ScrollView>

                        </>
                    )

            }



        </View>
    )
}
>>>>>>> aa7a08f (commit from vs code)
