import { createStackNavigator } from 'react-navigation-stack';
import ForgotPassword from '../screens/auth/forgot/forgotpassword';
import Login from '../screens/auth/login/login';
import Register from '../screens/auth/register/register';




const AuthStack = createStackNavigator({

    Login:
    {
        screen: Login,
    },
    Register:
    {
        screen: Register
    },
    ForgotPasswordPage:
    {
        screen: ForgotPassword
    }
},
    {
        initialRouteName: 'Login',
        headerMode:"none"
    }

)
export default AuthStack;