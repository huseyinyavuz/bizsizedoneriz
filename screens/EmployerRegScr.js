import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import Employer from '../objects/employer';
import {registerEmployer} from '../store/actions/regEmployerActions';

//TODO: Add strings

class EmployerRegScr extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            business: ''
        }

        this.handleEmployerReg = this.handleEmployerReg.bind(this);
    }

    async handleEmployerReg(){
        var newEmployer = new Employer(this.state);
        try{
            await this.props.registerEmployer(newEmployer);
        }
        catch(e){
            console.log(e);
        }

    }

    render(){
        return(
            <View>
                <Text>Employer Registration Screen</Text>
                <Text>Ad</Text>
                <TextInput
                    onChangeText={(firstname) => this.setState({firstname})}
                    value={this.state.firstname}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text>Soyad</Text>
                <TextInput
                    onChangeText={(lastname) => this.setState({lastname})}
                    value={this.state.lastname}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text>Isletme</Text>
                <TextInput
                    onChangeText={(business) => this.setState({business})}
                    value={this.state.business}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Button
                    title='Kayit'
                    onPress={this.handleEmployerReg}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state',state)
    return{
        authError: state.regEmployer.regError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerEmployer: (employer) => dispatch(registerEmployer(employer)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerRegScr);