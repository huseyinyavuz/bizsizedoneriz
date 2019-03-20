import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScr from '../screens/LoginScr';
import EmployeeRegScr from '../screens/EmployeeRegScr';
import EmployerRegScr from '../screens/EmployerRegScr';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScr,
        EmployeeReg: EmployeeRegScr,
        EmployerReg: EmployerRegScr,
    },
    {
        initialRouteName: 'EmployerReg'
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;