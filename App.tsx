import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { getUser } from './src/graphql/queries'
//import {withAuthenticator} from 'aws-amplify-react-native'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

 function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //run this when this first mount
  useEffect(( ) => {
    const fetchUser = async () => {
      //get authinticated user from auth
         const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      
      if (userInfo){
       //get the user from the backend with the user id from auth
       const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}))
       //
      }
    }
    fetchUser(); 
    
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);

function apsync() {
  throw new Error('Function not implemented.');
}
