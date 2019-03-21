import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {getVal, firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

// TODO: isEmpty ve isLoaded(react-redux-firebase) kullanilabilir https://github.com/prescottprue/react-redux-firebase/blob/master/docs/api/helpers.md

//TODO: Add strings

class ListJobOffersScr extends React.Component{
    
    constructor(props){
        super(props);
    }
    //TODO: GetItemLayout Fonksiyonu kesinlikle performans icin flatlist e eklenmeli

    render(){
        if(this.props.jobList){
            console.log('joblist',this.props.jobList);
            const joblist = Object.values(this.props.jobList);
            return(
                <View>
                    <Text>List Job Offers Screen</Text>
                    <FlatList
                    data={joblist}
                    renderItem={renderItem}
                    />
                </View>
            );
        }
        else return null;
    }
}

// Moved outside for performance
const renderItem=({item}) => (<View><Text>{item.title}</Text></View>);


const mapStateToProps = (state) => {
    console.log('state',state);
    return {
        jobList: getVal(state.firestore,`data/jobOffers`)
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        { collection: 'jobOffers'},
    ],)
)(ListJobOffersScr)
