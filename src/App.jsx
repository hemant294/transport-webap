import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import Authentication from './pages/Authentication'
import Hero from './pages/Hero'

function App() {

  return (
    <>
      <Layout>
        <div className="container mx-auto px-8 py-4">
          {/* <Authentication /> */}
          <Hero />
        </div>
      </Layout>
    </>
  )
}

export default App
