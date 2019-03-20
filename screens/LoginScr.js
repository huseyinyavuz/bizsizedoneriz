import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {registerWithFacebook} from '../store/actions/authActions';
import {connect} from 'react-redux';

//TODO: Add strings

class LoginScr extends React.Component{

    constructor(props){
        super(props);

        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    }
    
    async handleFacebookLogin(){
        try{
            await this.props.registerWithFacebook();
        } catch(e){
            console.log(e);
        }
    }
    

    componentDidUpdate(){
        console.log('props', this.props);
    }

    render(){
        return(
            <View>
                <Text>Biz Size Doneriz</Text>
                <Button
                    title='Facebook Login'
                    onPress={this.handleFacebookLogin}
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
        registerWithFacebook: () => dispatch(registerWithFacebook()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScr);