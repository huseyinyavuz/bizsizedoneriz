import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import {registerWithEmail} from '../store/actions/authActions';

//TODO: Add strings

class AppLoginScr extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }

        this.handleAppLogin = this.handleAppLogin.bind(this);
    }

    async handleAppLogin(){

        try{
            await this.props.registerWithEmail(this.state);
        }
        catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <View>
                <Text>App Login Screen</Text>
                <Text>Email</Text>
                <TextInput
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Text>Sifre</Text>
                <TextInput
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Button
                    title='Kayit'
                    onPress={this.handleAppLogin}
                />
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    console.log('state',state)
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerWithEmail: (creds) => dispatch(registerWithEmail(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLoginScr);
