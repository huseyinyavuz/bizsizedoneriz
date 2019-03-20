import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import {getVal, firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

//TODO: Add strings

class ListJobOffersScr extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        if(this.props){
            console.log('joblist',this.props.jobList);
        }
        return(
            <View>
                <Text>List Job Offers Screen</Text>
                
            </View>
        );
    }
}


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
