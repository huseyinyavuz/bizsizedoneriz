import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import JobOffer from '../objects/jobOffer';
import {createJobOffer} from '../store/actions/jobOfferActions';

//TODO: Add strings

class CreateJobOfferScr extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title: '',
            industry: '',
            jobPosition: '',
            employerId: ''
        }

        this.handleOfferCreation = this.handleOfferCreation.bind(this);
    }

    async handleOfferCreation(){
        var newJobOffer = new JobOffer(this.state);

        try{
            await this.props.createJobOffer(newJobOffer);
        }
        catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <View>
                <Text>Job Offer Creation Screen</Text>
                <Text>Baslik</Text>
                <TextInput
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text>Sektor</Text>
                <TextInput
                    onChangeText={(industry) => this.setState({industry})}
                    value={this.state.industry}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text>Aranan Pozisyon</Text>
                <TextInput
                    onChangeText={(jobPosition) => this.setState({jobPosition})}
                    value={this.state.jobPosition}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Button
                    title='Kayit'
                    onPress={this.handleOfferCreation}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state',state)
    return{
        offerCreateErr: state.jobOffer.offerCreationError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createJobOffer: (jobOffer) => dispatch(createJobOffer(jobOffer)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobOfferScr);