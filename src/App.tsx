import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ListPage } from './components/List/ListPage'
import { ChakraProvider } from '@chakra-ui/react'
import FormPage from './components/FormPage/FormPage'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
