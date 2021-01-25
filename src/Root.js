
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
//import configureStore from "./redux/store/store";
//const Store = configureStore();
class Root extends React.Component 
{
render(){
    return(    
    <App />
    )
}
}
export default Root;