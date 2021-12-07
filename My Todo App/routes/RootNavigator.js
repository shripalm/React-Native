import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import RemainingStack from './RemainingStack';
import CompletedStack from './CompletedStack';
import AddStack from './AddStack';
import AboutStack from './AboutStack';

const RootNavigator = createDrawerNavigator({
    
    "\n❥\t\t\t\tREMAINING TASKS": {
        screen: RemainingStack
    },
    '❥\t\t\t\tCOMPLETED TASKS': {
        screen: CompletedStack,
    },
    '❥\t\t\t\tADD TASKS': {
        screen: AddStack,
    },
    '❥\t\t\t\tABOUT': {
        screen: AboutStack,
    },

},
{
    // hideStatusBar: true
})

export default createAppContainer(RootNavigator)