import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Text, View,ScrollView} from 'react-native';
import axios from 'axios';
import MovieCard from './MovieCard';

function Popular() {
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);

    const fetchPopular = async()=>{
        try{
            const {data}= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f807a8040c889046b88f3f87ed151bb&language=en-US&page=1');
            setpopular(data.results);
            //console.log(data.results);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchPopular();
    }, []);

    
    return (
        <View style={styles.popular}>
            <Text style={styles.section_Title}>Popular</Text>
            <View style={styles.container}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled>
                {popular && popular.map((item)=>(
                    <View style={styles.card} key={item.id}>
                    <MovieCard
                    key={item.id}
                    id={item.id}
                    poster={item.poster_path}
                    title={item.title || item.original_name}
                    // vote_average={item.vote_average}
                    media_type={item.media_type}/>
                    </View>
                ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default Popular;
