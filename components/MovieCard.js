import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {img_300, unavailable} from '../config/config';

function MovieCard({id, title, poster, media_type, vote_average}) {
    return (
        <View style={styles.moviecard} key={id}>
            <Image source={{uri: (poster ? `${img_300}/${poster}`: unavailable)}}
            style={styles.movie_image}/>
            <Text style={styles.movie_title}>{title.substr(0,15)}{"..."}</Text>
            {/* <Text style={styles.vote_average}>{vote_average}</Text> */}
            <View style={styles.media_type}>
            <Text style={styles.type}>{media_type === 'tv' ? "TV Series": "Movie"}</Text>
            </View>
        </View>
    )
}

export default MovieCard;
