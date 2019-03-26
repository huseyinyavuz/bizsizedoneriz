import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import LoginScr from '../screens/LoginScr';
import EmployeeRegScr from '../screens/EmployeeRegScr';
import EmployerRegScr from '../screens/EmployerRegScr';
import CreateJobOfferScr from '../screens/CreateJobOfferScr';
import ListJobsOffersScr from '../screens/ListJobOffersScr';
import AppLoginScr from '../screens/AppLoginScr';

const AppNavigator = createBottomTabNavigator(
    {
        Login: LoginScr,
        EmployeeReg: EmployeeRegScr,
        EmployerReg: EmployerRegScr,
        CreateJobOffer: CreateJobOfferScr,
        ListJobOffers: ListJobsOffersScr,
        AppLogin: AppLoginScr
    },
    {
        initialRouteName: 'Login'
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;