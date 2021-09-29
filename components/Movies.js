import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MovieCard from './MovieCard';

function Movies() {
    const [movies, setmovies] = useState([]);
    const [page, setpage] = useState(1);

    const fetchMovies=()=>{
        
    }

    useEffect(()=>{

    },[]);

    return (
        <View style={styles.movieContainer}>

        </View>
    )
}

export default Movies;
