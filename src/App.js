import React, { Component } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Footer from './Components/Footer/Footer'
import Container from './Components/Container/Container'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Container />
          <Header />
          <Routes>
            <Route path='Home' element={<Homepage />}/>
            <Route path='Contact'  element={<Contact />}/>
            <Route path='About' element={<About />}/>
            <Route path='Blog' element={<Blog />}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
