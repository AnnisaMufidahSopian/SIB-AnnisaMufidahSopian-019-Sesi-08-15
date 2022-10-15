import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Column from './screen/Column';
import CoreComponents from './screen/CoreComponents';
import Flat from './screen/Flat';
import RandomUser from './screen/RandomUser';
import Scrolling from './screen/Scrolling';
import ScrollingImg from './screen/ScrollingImg';
import StylingBasic from './screen/StylingBasic';
import TextInputHandling from './screen/TextInputHandling';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="CoreComponents"
          component={CoreComponents}
          options={{ title: 'Core Components-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="Column"
          component={Column}
          options={{ title: 'Column-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="StylingBasic"
          component={StylingBasic}
          options={{ title: 'Styling Basic-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="TextInputHandling"
          component={TextInputHandling}
          options={{ title: 'Text Input Handling-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="ScrollingImg"
          component={ScrollingImg}
          options={{ title: 'Scrolling Image-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="Scrolling"
          component={Scrolling}
          options={{ title: 'Scrolling-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="Flat"
          component={Flat}
          options={{ title: 'Flat List-RCTN-KS05-019 Annisa M S' }}
        />
        <Stack.Screen
          name="RandomUser"
          component={RandomUser}
          options={{ title: 'Random User API-RCTN-KS05-019 Annisa M S' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;