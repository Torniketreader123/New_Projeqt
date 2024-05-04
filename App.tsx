import React from 'react';
import DashboarStackNavigator from './src/navigations/DashboardStackNvigator';
import { Provider } from 'react-redux';
import store from './src/store/store';





const App = () => {

  return (
    <Provider store={store}>
<DashboarStackNavigator/>
</Provider>
  )

}

export default App;