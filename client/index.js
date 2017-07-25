import Expo from 'expo';
import App from './App';

fetch('http://localhost:5000/', {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(result=>result.json()).then(result=>{
          console.log(result)})

Expo.registerRootComponent(App);
