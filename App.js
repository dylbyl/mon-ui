import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './constants/Routes.js';
import Theme from './constants/Theme.js';
import RandomMonView from './views/randomMonView'
import DemoView from './views/demoView'
import DemoView2 from './views/demoView2'
import Logo from './views/logo.js';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={Routes.daily}
				screenOptions={{
					headerStyle: {
						backgroundColor: Theme.red
					},
					headerTintColor: Theme.gbYellow,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name={Routes.random}
					component={RandomMonView}
					options={{ title: 'Random Mon', }}
					initialParams={{ type: "random" }}
				/>
				<Stack.Screen
					name={Routes.daily}
					component={RandomMonView}
					options={{ title: 'Daily Mon', }}
					initialParams={{ type: "daily" }}
				/>
				<Stack.Screen
					name={Routes.home}
					component={DemoView}
					options={{ title: 'Overview', }}
					initialParams={{ name: "Josh" }}
				/>
				<Stack.Screen
					name={Routes.details}
					component={DemoView2}
					options={({ route }) => ({ title: `Details - ${route.params.name}` })}
					initialParams={{ name: "Josh", color: Theme.red }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
