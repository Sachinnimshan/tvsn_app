import React, { useState } from 'react';
import {TouchableOpacity, View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Popular from './Popular';
import Trending from './Trending';


function Home() {
    const [sidebar, setsidebar] = useState(false);

    return (
        <View style={styles.home}>
            {/* Header */}
            <View style={styles.header}>
            <View style={{display: "flex", flexDirection: "row"}}>
            <TouchableOpacity>
            <View>
            <FontAwesomeIcon icon={faBars} color="white" size={25}/>
            </View>
            </TouchableOpacity>
            <Text style={styles.logo}>TVSN</Text>
            </View>
            <View>
                <TextInput 
                style={styles.searchbar}
                placeholder="Search For Movies, Tv Series ..."/>
            </View>
            </View>
            {/* Header */}

            {/* Body */}
            <ScrollView>
            <View style={styles.body}>
                <Popular/>
                <Trending/>
            </View>
            </ScrollView>
            {/* Body */}
        </View>
    )
}

export default Home;