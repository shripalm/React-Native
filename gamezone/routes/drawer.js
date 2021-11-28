import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    'About Section': {
        screen: AboutStack,
    }
},{
    hideStatusBar: true
})

export default createAppContainer(RootNavigator)