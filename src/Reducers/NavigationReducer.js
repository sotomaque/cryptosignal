import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './../Navigation/RootNavigator';


const firstAction = AppNavigator.router.getActionForPathAndParams('Index');
const tempNavState = AppNavigator.router.getStateForAction(firstAction)

const initialState = AppNavigator.router.getStateForAction(tempNavState);

export default function(state = initialState, action) {
    let newState

    switch (action.type) {
        case 'Index':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Index' }),
            );
            break;

        case 'ExpandedView':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ExpandedView' })
            )
            break;

        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;

}
