import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScr from '../screens/LoginScr';
import EmployeeRegScr from '../screens/EmployeeRegScr';
import EmployerRegScr from '../screens/EmployerRegScr';
import CreateJobOfferScr from '../screens/CreateJobOfferScr';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScr,
        EmployeeReg: EmployeeRegScr,
        EmployerReg: EmployerRegScr,
        CreateJobOffer: CreateJobOfferScr
    },
    {
        initialRouteName: 'CreateJobOffer'
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;