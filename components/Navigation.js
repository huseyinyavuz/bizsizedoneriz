import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScr from '../screens/LoginScr';
import EmployeeRegScr from '../screens/EmployeeRegScr';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScr,
        EmployeeReg: EmployeeRegScr
    },
    {
        initialRouteName: 'EmployeeReg'
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;