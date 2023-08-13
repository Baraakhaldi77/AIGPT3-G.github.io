import React from 'react'

import { Blog, Feature, Footer, Header, Possibility, WhatGpt3 } from "./Containers";
import { Articles, Brand, CTA, Features, Navbar, } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
    
  )
}

export default App;