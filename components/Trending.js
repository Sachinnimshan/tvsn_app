import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View } from 'react-native';
import MovieCard from './MovieCard';
import styles from './styles';

function Trending() {
    const [trending, setTrending] = useState([]);
    const [page, setpage] = useState(1);

    const fetchTrending = async()=>{
        try{
            const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=6f807a8040c889046b88f3f87ed151bb&page=${page}`);
            setTrending(data.results);
            //console.log(data.results);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchTrending();
    },[page]);

    return (
        <View style={styles.popular}>
            <Text style={styles.section_Title}>Trending</Text>
            <View style={styles.container}>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled>
                {trending && trending.map((item)=>(
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

export default Trending;
