import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { ToastProvider } from 'react-native-toast-notifications'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StackNavigator from './src/navigations/DashboardStackNvigator';


const App = () => {

  return (
<GestureHandlerRootView>
    <Provider store={store}>
      <ToastProvider>
        <StackNavigator />
      </ToastProvider>

    </Provider>
    </GestureHandlerRootView>



  )

}

export default App;