import React, { useState, useEffect, useRef } from "react";
import Header from "./widgets/Header";
import Footer from "./widgets/Footer";
import ReactQuery from './components/ReactQuery'
// import ReduxTest from './components/ReduxTest'
import SignupForm from './form/SignupForm';
const App = () => {

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SignupForm />
 
      {/* <ReactQueryTest /> */}
      {/* <ReduxTest /> */}
      {/* <ReactQuery /> */}
      {/* <Main /> */}
      {/* <EditWord /> */}
      <Footer />
    </div>
  );
}

export default App;