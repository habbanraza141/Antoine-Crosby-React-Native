import React, {useEffect} from 'react';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getData } from './src/utils/helperFunctions';
import FlashMessage from 'react-native-flash-message';
import { saveUserData } from './src/redux/reducers/auth';
const dispatch = {store}

const  App = () => {
  useEffect(() => {
    initUser()
  }, [])

  const initUser = async () => {
    try {
      let data = await getData('userData')
      if (!!data) {
        dispatch(saveUserData(JSON.parse(data)))
      }
    } catch (error) {
      console.log('no data found')
    }
  }

  return (
    <Provider store={store} >
      <Routes />
      <FlashMessage
        position={'top'}
      />
    </Provider>

  );
}




export default App;
