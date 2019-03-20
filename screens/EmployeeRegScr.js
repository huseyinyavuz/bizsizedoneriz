import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {connect} from 'react-redux';
import Employee from '../objects/employee';
import {registerEmployee} from '../store/actions/regEmployeeActions';

//TODO: Add strings


class EmployeeRegScr extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            occupation: ''
        }

        this.handleEmployeeReg = this.handleEmployeeReg.bind(this);
    }

    async handleEmployeeReg(){
        var newEmployee = new Employee(this.state);
        try{
            await this.props.registerEmployee(newEmployee);
        }
        catch(e){
            console.log(e);
        }

    }

    render(){
        return(
            <View>
                <Text>Employee Registration Screen</Text>
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
                <Text>Meslek</Text>
                <TextInput
                    onChangeText={(occupation) => this.setState({occupation})}
                    value={this.state.occupation}
                    style={{borderBottomColor: '#000000', borderBottomWidth: 1 }}
                />
                <Button
                    title='Kayit'
                    onPress={this.handleEmployeeReg}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state',state)
    return{
        authError: state.regEmployee.regError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerEmployee: (employee) => dispatch(registerEmployee(employee)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeRegScr);