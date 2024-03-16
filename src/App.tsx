import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ListPage } from './components/List/ListPage'
import { ChakraProvider } from '@chakra-ui/react'
import AddPage from './components/AddPage/AddPage'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ListPage
                teamMembers={[
                  {
                    email: 'aditya1.agashe@gmail.com',
                    id: '1',
                    firstName: 'Aditya',
                    lastName: 'Agashe',
                    phoneNumber: '123-499-1234',
                    role: 'Admin',
                  },
                ]}
              />
            }
          />
          <Route path="/add" element={<AddPage onSave={() => {}} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
