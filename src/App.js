import './App.css';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import News from './component/News';
import Navbar from './component/Navbar';
import About from './component/About';
const App=()=> {
 const pageSize = 6;
 const apiKey = process.env.REACT_APP_NEWS_API;
const [progress, setProgress] = useState(0)
    return (
      <>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}/>
          <Routes>
            <Route exact path='/newsapp' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize= {pageSize} country="in" category="general" />}></Route>

            <Route exact path='/science' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize= {pageSize} country="in" category="science" />}></Route>

            <Route exact path='/business' element={<News  setProgress={ setProgress} apiKey={ apiKey}  key="business" pageSize= {pageSize} country="in" category="business" />}></Route>

            <Route exact path='/entertainment' element={<News  setProgress={ setProgress} apiKey={ apiKey}  key="entertainment" pageSize= {pageSize} country="in" category="entertainment" />}></Route>

            <Route exact path='/health' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize= {pageSize} country="in" category="health" />}></Route>

            <Route exact path='/sports' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize= {pageSize} country="in" category="sports" />}></Route>

            <Route exact path='/technology' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize= {pageSize} country="in" category="technology" />}></Route>

            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </Router>
      </>
    )
  }

export default App
