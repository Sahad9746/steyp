import React from 'react'
import './app.css'
import { Navbar, Syllabus, Feature, Career, Brand} from './components'
import { TechScholl, TechColleg, Footer, Header, Features,  } from './container'

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <TechScholl />
        <TechColleg />
        <Features />
        <Brand />
        <Syllabus />
        <Career />
        <Footer />     
      </div>
    </div>
  )
}

export default App
