import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    home:{
        width: "100%",
        height: "100%",
    },
    header:{
        backgroundColor: "#131A22",
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        flexDirection: "row"
    },
    logo:{
        fontSize: 24,
        color: "white",
        marginLeft: 10
    },
    searchbar:{
        width: 200,
        height: 35,
        backgroundColor: "white",
        borderRadius: 5,
        paddingLeft: 10,
        color: "gray"
    },
    body:{
        backgroundColor: "#232F3E",
        width: "100%",
        height: "100%",
    },
    container:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
    },
    card:{
        marginRight: 5
    },
    moviecard:{
        flexDirection: "column",
        width: 165,
        height: 325,
        display: "flex",
        alignItems: "center",
    },
    movie_image:{
        width: "100%",
        height: 250,
        borderRadius: 5,
        marginBottom: 5,
        borderColor: "gray",
        borderWidth: 1
    },
    movie_title:{
        fontSize: 16,
        color: "lightgray"
    },
    vote_average:{
        color: "red",
        fontSize: 18
    },
    media_type:{
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: "#E5A00D",
        marginTop: 5
    },
    type:{
        color: "white"
    },
    section_Title:{
        color: "lightgray",
        fontSize: 20
    },
    popular:{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 15,
        paddingBottom: 15,
        paddingTop: 15,
        paddingRight: 15
    }

});

export default styles;