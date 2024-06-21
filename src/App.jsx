// useContext() = React Hook that allows you to share values between multiple levels of components
//                without passing props through each level (prop drilling)


// PROVIDER COMPONENT has data we would like access to (here ComponentA)
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </<yContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { myContext } from '.ComponentA';
// 2. const value = useContext(MyContext);
 

import ComponentA from './ComponentA.jsx';
import React from 'react';
function App() {
 return (<ComponentA />)
}

export default App
